import { clsx } from 'clsx';

export default function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      className={clsx(className, 'icon stroke')}
    >
      <path d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );
}
