import { useContentfulQuery } from '#/lib/clients/contentful/graphql'
import {
  LinkCoreFragmentDoc,
  NavigationDesktopMenuFragment,
  NavigationDesktopMenuFragmentDoc,
  NavigationDocument,
  NavigationGroupPromoTilesFragment,
  NavigationGroupPromoTilesFragmentDoc,
  NavigationGroupSubNavFragment,
  NavigationGroupSubNavFragmentDoc,
  NavigationQuery,
  NavigationSectionItemsFragment,
  NavigationSectionItemsFragmentDoc,
  SysBasicInformationFragmentDoc,
} from '#/packages/contentful/generated/graphql'
import { useLocaleCountryCodeUpper } from '#/lib/hooks/i18n'
import { useRouter } from 'next/router'
import { getFragmentData } from '#/packages/contentful/generated'

export type Navigation = ReturnType<typeof normaliseContentfulNavigation>
export type NavigationGroup = Navigation['desktopMenu'][number]
export type SubNavTemplate = 'default' | 'just-in'

export const useNavigation = () => {
  const { isPreview } = useRouter()
  const locale = useLocaleCountryCodeUpper()
  const { data, ...rest } = useContentfulQuery(NavigationDocument, {
    id: process.env.NEXT_PUBLIC_CONTENTFUL_NAVIGATION_ID,
    locale,
    preview: isPreview,
  })
  return {
    ...rest,
    data: normaliseContentfulNavigation(data),
  }
}

const normaliseContentfulNavigation = (data?: NavigationQuery) => {
  const desktopMenu =
    getFragmentData(
      NavigationDesktopMenuFragmentDoc,
      data?.navigation?.desktopMenu
    ) || ([] as unknown as NavigationDesktopMenuFragment)

  return {
    desktopMenu: desktopMenu?.items
      ?.map((item) => {
        const promoTiles =
          getFragmentData(
            NavigationGroupPromoTilesFragmentDoc,
            item?.promoTiles
          ) || ([] as unknown as NavigationGroupPromoTilesFragment)
        const subNav =
          getFragmentData(NavigationGroupSubNavFragmentDoc, item?.subNav) ||
          ([] as unknown as NavigationGroupSubNavFragment)

        return {
          ...item,
          sys: getFragmentData(SysBasicInformationFragmentDoc, item?.sys),
          headingLink: getFragmentData(LinkCoreFragmentDoc, item?.headingLink),
          subNavTemplate: (item?.subNavTemplate || 'default') as SubNavTemplate,
          subNav: subNav?.items
            .map((subNavItem) => {
              const subNavItems =
                getFragmentData(
                  NavigationSectionItemsFragmentDoc,
                  subNavItem?.items
                ) || ([] as unknown as NavigationSectionItemsFragment)

              return {
                ...subNavItem,
                sys: getFragmentData(
                  SysBasicInformationFragmentDoc,
                  subNavItem?.sys
                ),
                headingLink: getFragmentData(
                  LinkCoreFragmentDoc,
                  subNavItem?.headingLink
                ),
                items: subNavItems?.items?.map((subNavItemsItem) => {
                  return getFragmentData(LinkCoreFragmentDoc, subNavItemsItem)
                }),
              }
            })
            .filter(Boolean),
          // TODO :: Discuss with the team on best approach
          promoTiles: promoTiles?.items?.filter(Boolean),
        }
      })
      // To keep typesafety we need to filter out any entries that have no translations for locales
      .filter((group) => group.heading),
  }
}
