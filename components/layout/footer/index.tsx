import Link from 'next/link';

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
    <footer className="snap-start border-t border-gray-700 bg-white text-black">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-8 border-b border-gray-700 py-12 transition-colors duration-150 lg:grid-cols-12">
          <nav className="col-span-1 grid gap-8 lg:col-span-8 lg:grid-cols-9">
            {customerCareMenu.length ? (
              <dl className="grid content-start gap-2 uppercase md:col-span-3 md:grid-flow-row">
                <dt className="text-sm">Customer Care</dt>
                {customerCareMenu.map((item: Menu) => (
                  <dd key={item.title}>
                    <Link
                      href={item.path}
                      className="text-xxs text-gray-800 transition duration-150 ease-in-out hover:text-gray-500"
                    >
                      {item.title}
                    </Link>
                  </dd>
                ))}
              </dl>
            ) : null}
            {informationMenu.length ? (
              <dl className="grid content-start gap-2 uppercase md:col-span-3 md:grid-flow-row">
                <dt className="text-sm">Information</dt>
                {informationMenu.map((item: Menu) => (
                  <dd key={item.title}>
                    <Link
                      href={item.path}
                      className="text-xxs text-gray-800 transition duration-150 ease-in-out hover:text-gray-500"
                    >
                      {item.title}
                    </Link>
                  </dd>
                ))}
              </dl>
            ) : null}
            {followUsMenu.length ? (
              <dl className="grid content-start gap-2 uppercase md:col-span-3 md:grid-flow-row">
                <dt className="text-sm">Follow Us</dt>
                {followUsMenu.map((item: Menu) => (
                  <dd key={item.title}>
                    <a
                      href={item.path}
                      className="text-xxs text-gray-800 transition duration-150 ease-in-out hover:text-gray-500"
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
          <SignUp className="col-span-1 lg:col-span-4" />
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 pb-10 pt-6 text-xs uppercase md:flex-row">
          <span>
            &copy; {copyrightDate} {SITE_NAME}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
