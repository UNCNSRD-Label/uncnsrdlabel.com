import Link from "next/link";

import { ConsentDialog } from "@uncnsrdlabel/ui/components/consent/dialog";
import { LogotypeIcon } from "@uncnsrdlabel/ui/components/icons/logotype";
// import { RedeemCode } from "@uncnsrdlabel/ui/components/redeem-code/dialog";
import { themeColors } from "@uncnsrdlabel/lib/effects";
import { getMenu } from "@uncnsrdlabel/graphql-shopify-storefront";
import { Menu } from "@uncnsrdlabel/graphql-shopify-storefront/types";
import { SignUp } from "@uncnsrdlabel/ui/components/sign-up";
import { SocialMenu } from "@uncnsrdlabel/ui/components/social-menu";

const { NEXT_PUBLIC_SITE_NAME } = process.env;

export async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const customerCareMenu = await getMenu("customer-care");
  const informationMenu = await getMenu("information");
  const followUsMenu = await getMenu("follow-us");

  const linkClassName =
    "text-xs sm:text-xxs transition uppercase duration-150 ease-in-out";

  return (
    <footer className="dark relative z-40 border-t border-inherit sm:snap-start">
      <div className={themeColors}>
        <div className="mx-auto w-full max-w-7xl px-6 pb-12">
          <div className="grid grid-cols-1 items-start gap-8 border-b border-inherit py-6 transition-colors duration-150 sm:grid-cols-12 sm:py-12">
            <nav className="col-span-1 grid gap-8 sm:col-span-12 sm:grid-cols-12 lg:col-span-8 lg:grid-cols-9">
              {customerCareMenu.length ? (
                <dl className="grid content-start gap-2 sm:col-span-4 sm:grid-flow-row lg:col-span-3">
                  <dt className="text-sm uppercase">Customer Care</dt>
                  {customerCareMenu.map((item: Menu, index) => (
                    <dd key={item.title || index}>
                      <Link href={item.path} className={linkClassName}>
                        {item.title}
                      </Link>
                    </dd>
                  ))}
                  <dd>
                    <ConsentDialog className={linkClassName} />
                  </dd>
                </dl>
              ) : null}
              {informationMenu.length ? (
                <dl className="grid content-start gap-2 sm:col-span-4 sm:grid-flow-row lg:col-span-3">
                  <dt className="text-sm uppercase">Information</dt>
                  {informationMenu.map((item: Menu, index) => (
                    <dd key={item.title || index}>
                      <Link href={item.path} className={linkClassName}>
                        {item.title}
                      </Link>
                    </dd>
                  ))}
                  {/* <dd>
                    <RedeemCode className={linkClassName} />
                  </dd> */}
                </dl>
              ) : null}
              <div className="grid gap-4 sm:col-span-4 sm:grid-flow-row lg:col-span-3">
                {followUsMenu.length ? (
                  <dl className="grid content-start gap-2">
                    <dt className="text-sm uppercase">Follow Us</dt>
                    {followUsMenu.map((item: Menu, index) => (
                      <dd key={item.title || index}>
                        <a
                          href={item.path}
                          className={linkClassName}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </a>
                      </dd>
                    ))}
                  </dl>
                ) : null}
              </div>
            </nav>
            <SignUp className="lg:col-start-0 col-span-1 sm:col-span-6 sm:col-start-7 lg:col-span-4" />
          </div>
          <div className="flex flex-col items-center justify-between text-xs uppercase sm:flex-row sm:pt-6">
            <SocialMenu className="my-8 h-10 sm:my-0" />
            <span className="sm:order-first">
              &copy; {copyrightDate} {NEXT_PUBLIC_SITE_NAME}. All rights
              reserved.
            </span>
          </div>
          <LogotypeIcon className="mx-auto mt-8 h-6 fill-inherit drop-shadow transition duration-300 ease-in-out hover:scale-110 sm:hidden sm:h-10 " />
        </div>
      </div>
    </footer>
  );
}
