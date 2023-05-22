'use client';

import { clsx } from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Navbar({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <nav
      className={clsx(
        !segment
          ? 'fixed bg-opacity-0 [&_.icon.fill]:fill-white [&_.icon.stroke]:stroke-white'
          : 'sticky bg-opacity-60 [&_.icon.fill]:fill-black [&_.icon.stroke]:stroke-black',
        'left-0 top-0 z-50 flex w-full items-center justify-between bg-black px-6 py-4'
      )}
    >
      {children}
    </nav>
  );
}
