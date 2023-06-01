'use client';

import { clsx } from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { forwardRef } from 'react';

type Props = { children: React.ReactNode };

export type Ref = HTMLElement | null;

export const Navbar = forwardRef<Ref, Props>(function Navbar(props, ref = null) {
  const segment = useSelectedLayoutSegment();

  const isFixedSegment = () => [null, 'product'].includes(segment);
  console.log({ segment });
  return (
    <nav
      className={clsx(
        'left-0 top-0 z-50 flex w-full items-center justify-between bg-black bg-opacity-0 px-6 py-4',
        isFixedSegment()
          ? 'fixed [&_.icon.fill]:fill-white [&_.icon.stroke]:stroke-white'
          : 'sticky [&_.icon.fill]:fill-black [&_.icon.stroke]:stroke-black'
      )}
      ref={ref}
    >
      {props.children}
    </nav>
  );
});

export default Navbar;
