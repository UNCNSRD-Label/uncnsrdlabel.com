import { getAlternativeLanguages } from "@/lib/i18n";
import {
    getLocalizationDetailsHandler
} from "@uncnsrdlabel/graphql-shopify-storefront";
import {
    SITE_DOMAIN_WEB
} from "@uncnsrdlabel/lib";
import type { Metadata } from "next";

const {
    NEXT_PUBLIC_PROTOCOL,
    NEXT_PUBLIC_SITE_NAME,
    TWITTER_CREATOR,
    TWITTER_SITE,
} = process.env;

export const getCanonical = ({ lang, path }: { lang: Intl.BCP47LanguageTag; path: string}) => {
    const canonical = path.replace(`/${lang}`, "");

    return canonical;
}

export const getBaseMetadata = async ({ lang, path = "/" }: { lang: Intl.BCP47LanguageTag; path: string }) => {
    if (!lang) {
        console.error("No lang in getBaseMetadata")
    }

    const localization = await getLocalizationDetailsHandler({ lang });

    const metadata: Metadata = {
        alternates: {
            canonical: getCanonical({
                lang,
                path
            }),
            languages: getAlternativeLanguages({ localization, path }),
        },
        applicationName: NEXT_PUBLIC_SITE_NAME,
        appLinks: {
            web: {
                url: `${NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`,
                should_fallback: true,
            },
        },
        appleWebApp: {
            capable: true,
            title: NEXT_PUBLIC_SITE_NAME,
            statusBarStyle: "black-translucent",
            startupImage: [
                {
                    media:
                        "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                    url: "/images/splash-screens/iPhone_14_Pro_Max_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                    url: "/images/splash-screens/iPhone_14_Pro_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                    url: "/images/splash-screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                    url: "/images/splash-screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                    url: "/images/splash-screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                    url: "/images/splash-screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                    url: "/images/splash-screens/iPhone_11__iPhone_XR_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
                    url: "/images/splash-screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                    url: "/images/splash-screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                    url: "/images/splash-screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                    url: "/images/splash-screens/12.9__iPad_Pro_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                    url: "/images/splash-screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                    url: "/images/splash-screens/10.9__iPad_Air_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                    url: "/images/splash-screens/10.5__iPad_Air_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                    url: "/images/splash-screens/10.2__iPad_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                    url: "/images/splash-screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
                    url: "/images/splash-screens/8.3__iPad_Mini_landscape.png",
                },
                {
                    media:
                        "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                    url: "/images/splash-screens/iPhone_14_Pro_Max_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                    url: "/images/splash-screens/iPhone_14_Pro_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                    url: "/images/splash-screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                    url: "/images/splash-screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                    url: "/images/splash-screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                    url: "/images/splash-screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                    url: "/images/splash-screens/iPhone_11__iPhone_XR_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
                    url: "/images/splash-screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                    url: "/images/splash-screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                    url: "/images/splash-screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                    url: "/images/splash-screens/12.9__iPad_Pro_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                    url: "/images/splash-screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                    url: "/images/splash-screens/10.9__iPad_Air_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                    url: "/images/splash-screens/10.5__iPad_Air_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                    url: "/images/splash-screens/10.2__iPad_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                    url: "/images/splash-screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",
                },
                {
                    media:
                        "screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
                    url: "/images/splash-screens/8.3__iPad_Mini_portrait.png",
                },
            ],
        },
        formatDetection: {
            address: false,
            date: false,
            email: false,
            telephone: false,
            url: false,
        },
        manifest: "/manifest.json",
        metadataBase: new URL(
            `${NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`,
        ),
        openGraph: {
            siteName: NEXT_PUBLIC_SITE_NAME,
            title: NEXT_PUBLIC_SITE_NAME,
            type: "website",
            url: new URL("/", `${NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`)
        },
        robots: {
            follow: true,
            index: true,
        },
        title: {
            default: NEXT_PUBLIC_SITE_NAME!,
            template: `%s | ${NEXT_PUBLIC_SITE_NAME}`,
        },
        ...(TWITTER_CREATOR &&
            TWITTER_SITE && {
            twitter: {
                card: "summary_large_image",
                creator: TWITTER_CREATOR,
                site: TWITTER_SITE,
            },
        }),
    }

    return metadata;
}