import Link from "next/link";

import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import SignUp from "./sign-up";

import { SocialIcon } from "react-social-icons";

const { SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const customerCareMenu = await getMenu("customer-care");
  const informationMenu = await getMenu("information");
  const followUsMenu = await getMenu("follow-us");

  const linkClassName = "text-xxs transition duration-150 ease-in-out";

  return (
    <footer className="relative z-40 border-t border-inherit sm:snap-start">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-8 border-b border-gray-700 py-12 transition-colors duration-150 sm:grid-cols-12">
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
            {followUsMenu.length ? (
              <dl className="grid content-start gap-2 uppercase sm:col-span-4 sm:grid-flow-row lg:col-span-3">
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
          </nav>
          <SignUp className="lg:col-start-0 col-span-1 sm:col-span-6 sm:col-start-7 lg:col-span-4" />
        </div>
        <div className="flex flex-col items-center justify-between pb-10 pt-6 text-xs uppercase sm:flex-row">
          <span>
            &copy; {copyrightDate} {SITE_NAME}. All rights reserved.
          </span>
          <menu className="grid grid-flow-col content-center justify-center gap-4">
            <SocialIcon
              className="!h-12 !w-12 [&_.social-svg-mask]:!fill-black dark:[&_.social-svg-mask]:!fill-white"
              target="_blank"
              url="https://tiktok.com/@uncnsrdlabel/"
            />
            <SocialIcon
              className="!h-12 !w-12 [&_.social-svg-mask]:!fill-black dark:[&_.social-svg-mask]:!fill-white"
              target="_blank"
              url="https://www.instagram.com/uncnsrdlabel/"
            />
            {/* <SocialIcon
              className="[&_.social-svg-mask]:!fill-black dark:[&_.social-svg-mask]:!fill-white !h-12 !w-12"
              target="_blank"
              url="https://twitter.com/uncnsrdlabel/"
            /> */}
            {/* <SocialIcon
              className="[&_.social-svg-mask]:!fill-black dark:[&_.social-svg-mask]:!fill-white !h-12 !w-12"
              target="_blank"
              url="https://www.facebook.com/uncnsrdlabel/"
            /> */}
          </menu>
        </div>
      </div>
    </footer>
  );
}
