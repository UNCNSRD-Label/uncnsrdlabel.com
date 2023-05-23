'use client';

import { clsx } from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';

import { createUrl } from 'lib/utils';

export default function Search({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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

    setTimeout(() => onClose(), 1_000);
  }

  return (
    <form
      onSubmit={onSubmit}
      className={clsx(
        'relative m-0 flex items-center border-b border-white bg-transparent p-0 transition-all',
        isOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
      )}
    >
      <input
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="w-full border-none bg-transparent px-4 py-2 pr-8 text-white placeholder:text-white"
      />
    </form>
  );
}
