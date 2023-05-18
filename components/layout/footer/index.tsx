import Link from 'next/link';

import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import SignUp from './sign-up';

const { SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const customerCareMenu = await getMenu('customer-care');
  const informationMenu = await getMenu('information');
  const followUsMenu = await getMenu('follow-us');

  return (
    <footer className="border-t border-gray-700 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 border-b border-gray-700 py-12 transition-colors duration-150 lg:grid-cols-12">
          <nav className="col-span-1 grid gap-8 lg:col-span-9 lg:grid-cols-9">
            {customerCareMenu.length ? (
              <ul className="grid content-start md:col-span-3 md:grid-flow-row">
                {customerCareMenu.map((item: Menu) => (
                  <li key={item.title} className="py-3 md:py-0 md:pb-4">
                    <Link
                      href={item.path}
                      className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            {informationMenu.length ? (
              <ul className="grid content-start md:col-span-3 md:grid-flow-row">
                {informationMenu.map((item: Menu) => (
                  <li key={item.title} className="py-3 md:py-0 md:pb-4">
                    <Link
                      href={item.path}
                      className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            {followUsMenu.length ? (
              <ul className="grid content-start md:col-span-3 md:grid-flow-row">
                {followUsMenu.map((item: Menu) => (
                  <li key={item.title} className="py-3 md:py-0 md:pb-4">
                    <a
                      href={item.path}
                      className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </nav>
          <div className="col-span-1 flex flex-wrap content-between justify-end gap-8 lg:col-span-3">
            <SignUp />
            <a className="flex flex-initial items-center justify-end font-bold" href="/">
              <span className="mr-2">
                <LogoIcon className="h-8" />
              </span>
              <span>{SITE_NAME}</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 pb-10 pt-6 text-sm md:flex-row">
          <p>
            &copy; {copyrightDate} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
