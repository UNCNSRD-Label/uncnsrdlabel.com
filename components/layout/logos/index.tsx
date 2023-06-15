'use client';

import { useIntersectionObserver } from '@react-hookz/web';
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
        className="bottom-[calc(100dvh_-_theme('spacing.32'))] fill-white h-16"
        ref={logomarkRef}
        style={{
          position: (rootIntersection?.intersectionRatio ?? 0) > 0 ? 'absolute' : 'fixed',
        }}
      />
      <LogotypeIcon
        className="bottom-20 fill-white w-56"
        ref={logotypeRef}
        style={{
          position: (rootIntersection?.intersectionRatio ?? 0) > 0 ? 'absolute' : 'fixed',
        }}
      />
      {/* <Image
        alt="UNCNSRD logomark"
        className="bottom-[calc(100dvh_-_theme('spacing.32'))]"
        height={60}
        ref={logomarkRef}
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        src={`/images/logos/logomark-${theme}.svg`}
        style={{
          filter: 'invert(1)',
          position: (rootIntersection?.intersectionRatio ?? 0) > 0 ? 'absolute' : 'fixed'
        }}
        width={60}
      /> */}
      {/* <Image
        alt="UNCNSRD logotype"
        className="bottom-20"
        height={60}
        ref={logotypeRef}
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        src={`/images/logos/logotype-${theme}.svg`}
        style={{
          filter: 'invert(1)',
          position: (rootIntersection?.intersectionRatio ?? 0) > 0 ? 'absolute' : 'fixed'
        }}
        width={270}
      /> */}
    </div>
  );
}
