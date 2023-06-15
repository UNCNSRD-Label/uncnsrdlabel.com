'use client';

import { useIntersectionObserver } from '@react-hookz/web';
import { clsx } from 'clsx';
import LogomarkIcon from 'components/icons/logomark';
import LogotypeIcon from 'components/icons/logotype';
import { useRef } from 'react';

type Props = { theme: 'dark' | 'light' };

export default function Logos({theme = 'light'}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const logomarkRef = useRef<SVGSVGElement>(null);
  const logotypeRef = useRef<SVGSVGElement>(null);

  const rootIntersection = useIntersectionObserver(rootRef, {
    threshold: [0, 0.5]
  });

  return (
    <div
      className="pointer-events-none relative inset-0 z-30 grid h-full justify-items-center"
      ref={rootRef}
    >
      <LogomarkIcon
        className={clsx("bottom-[calc(100dvh_-_theme('spacing.32'))] h-16", theme === 'light' ? 'fill-white' : 'fill-black')}
        ref={logomarkRef}
        style={{
          position: (rootIntersection?.intersectionRatio ?? 0) > 0 ? 'absolute' : 'fixed',
        }}
      />
      <LogotypeIcon
        className={clsx("bottom-20 fill-white w-56", theme === 'light' ? 'fill-white' : 'fill-black')}
        ref={logotypeRef}
        style={{
          position: (rootIntersection?.intersectionRatio ?? 0) > 0 ? 'absolute' : 'fixed',
        }}
      />
    </div>
  );
}
