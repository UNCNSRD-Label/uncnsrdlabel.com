'use client';

import { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';

import Form from './form';

export default function SearchButton() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <div className="relative grid w-full items-center">
      <Form isOpen={searchIsOpen} onClose={() => setSearchIsOpen(false)} />

      <button
        aria-label="Open search"
        onClick={() => {
          setSearchIsOpen(true);
        }}
        className="absolute right-2"
        data-testid="open-search"
      >
        <SlMagnifier className="icon fill h-5 w-5 drop-shadow" />
      </button>
    </div>
  );
}
