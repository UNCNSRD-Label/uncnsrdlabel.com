import Link from "next/link";

import ConsentDialog from "@/components/consent/dialog";
import LogotypeIcon from "@/components/icons/logotype";
import { themeColors } from "@/lib/effects";
import { getMenu } from "@/lib/shopify";
import { Menu } from "@/lib/shopify/types";
import { Suspense } from "react";
import SignUp from "./sign-up";

import { SocialIcon } from "react-social-icons";

const { NEXT_PUBLIC_SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const customerCareMenu = await getMenu("customer-care");
  const informationMenu = await getMenu("information");
  const followUsMenu = await getMenu("follow-us");

  const linkClassName = "text-xxs transition duration-150 ease-in-out";

  return (
    <footer className="dark relative z-40 border-t border-inherit sm:snap-start">
      <div className={themeColors}>
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-8 border-b border-inherit py-6 transition-colors duration-150 sm:grid-cols-12 sm:py-12">
            <nav className="col-span-1 grid gap-8 sm:col-span-12 sm:grid-cols-12 lg:col-span-8 lg:grid-cols-9">
              {customerCareMenu.length ? (
                <dl className="grid content-start gap-2 uppercase sm:col-span-4 sm:grid-flow-row lg:col-span-3">
                  <dt className="text-sm">Customer Care</dt>
                  {customerCareMenu.map((item: Menu) => (
                    <dd key={item.title}>
                      <Link href={item.path} className={linkClassName}>
                        {item.title}
                      </Link>
                    </dd>
                  ))}
                  <dd>
                    <Suspense>
                      <ConsentDialog className="text-xxs uppercase transition duration-150 ease-in-out" />
                    </Suspense>
                  </dd>
                </dl>
              ) : null}
              {informationMenu.length ? (
                <dl className="grid content-start gap-2 uppercase sm:col-span-4 sm:grid-flow-row lg:col-span-3">
                  <dt className="text-sm">Information</dt>
                  {informationMenu.map((item: Menu) => (
                    <dd key={item.title}>
                      <Link href={item.path} className={linkClassName}>
                        {item.title}
                      </Link>
                    </dd>
                  ))}
                </dl>
              ) : null}
              <div className="grid gap-4 sm:col-span-4 sm:grid-flow-row lg:col-span-3">
                {followUsMenu.length ? (
                  <dl className="grid content-start gap-2 uppercase">
                    <dt className="text-sm">Follow Us</dt>
                    {followUsMenu.map((item: Menu) => (
                      <dd key={item.title}>
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
          <div className="flex flex-col items-center justify-between text-xs uppercase sm:flex-row sm:pb-10 sm:pt-6">
            <menu className="my-8 grid grid-flow-col content-center justify-center gap-4 sm:my-0">
              <SocialIcon
                className="group !h-12 !w-12 fill-black hover:!fill-aaaHover hover:!stroke-aaaHover focus-visible:!fill-aaaFocus focus-visible:!stroke-aaaFocus dark:fill-white [&_.social-svg-mask]:!fill-inherit"
                target="_blank"
                url="https://tiktok.com/@uncnsrdlabel/"
              />
              <SocialIcon
                className="group !h-12 !w-12 fill-black hover:!fill-aaaHover hover:!stroke-aaaHover focus-visible:!fill-aaaFocus focus-visible:!stroke-aaaFocus dark:fill-white [&_.social-svg-mask]:!fill-inherit"
                target="_blank"
                url="https://www.instagram.com/uncnsrdlabel/"
              />
              {/* <SocialIcon
              className="group [&_.social-svg-mask]:!fill-black dark:[&_.social-svg-mask]:!fill-white focus-visible:!fill-aaaFocus hover:!fill-aaaHover !h-12 !w-12"
              target="_blank"
              url="https://twitter.com/uncnsrdlabel/"
            /> */}
              {/* <SocialIcon
              className="group [&_.social-svg-mask]:!fill-black dark:[&_.social-svg-mask]:!fill-white focus-visible:!fill-aaaFocus hover:!fill-aaaHover !h-12 !w-12"
              target="_blank"
              url="https://www.facebook.com/uncnsrdlabel/"
            /> */}
            </menu>
            <span className="sm:order-first">
              &copy; {copyrightDate} {NEXT_PUBLIC_SITE_NAME}. All rights
              reserved.
            </span>
          </div>
          <LogotypeIcon className="mx-auto my-16 h-6 fill-inherit drop-shadow transition duration-300 ease-in-out hover:scale-110 sm:hidden sm:h-10 " />
        </div>
      </div>
    </footer>
  );
}
