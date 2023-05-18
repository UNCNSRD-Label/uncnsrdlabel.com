'use client';

import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { SlEnvolope } from 'react-icons/sl';

import { createUrl } from 'lib/utils';

export default function Search({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/search', newParams));
  }

  return (
    <form onSubmit={onSubmit} className={clsx(className, 'relative w-full items-center')}>
      <input
        type="email"
        name="sign-up"
        placeholder="Sign up to our newsletter"
        defaultValue={searchParams?.get('q') || ''}
        className="w-full px-4 py-2"
      />
      <button className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <SlEnvolope className="h-5" />
      </button>
    </form>
  );
}
