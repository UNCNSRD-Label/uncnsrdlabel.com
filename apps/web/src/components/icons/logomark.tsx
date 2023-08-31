import { cn } from "@uncnsrdlabel/lib/classname";

type Props = { className?: string; style?: React.CSSProperties };

export function Logomark(props: Props) {
  return (
    <svg
      aria-label={`${process.env.NEXT_PUBLIC_SITE_NAME} logotype`}
      className={cn(props.className, "icon fill")}
      shapeRendering="geometricPrecision"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      style={props.style}
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0,320) scale(0.1,-0.1)">
        <path
          d="M370 2663 c1 -41 30 -153 52 -199 13 -27 44 -83 68 -124 24 -41 43
-82 43 -90 -1 -8 -60 -253 -132 -544 -97 -390 -131 -545 -131 -591 0 -71 22
-152 57 -212 24 -41 137 -149 180 -172 16 -8 263 -11 920 -11 l898 0 64 37
c69 41 214 187 243 244 10 19 106 387 213 818 l196 785 -31 24 c-16 13 -30 30
-30 38 0 12 -60 14 -400 14 l-399 0 -10 -37 c-6 -21 -73 -292 -151 -603 -78
-311 -145 -582 -151 -602 l-10 -38 -324 0 c-179 0 -325 3 -325 8 0 4 66 273
147 599 l148 592 -28 29 c-15 15 -27 33 -27 40 0 9 -128 12 -540 12 -508 0
-540 -1 -540 -17z m1000 -58 c0 -2 -68 -278 -150 -612 -86 -345 -148 -618
-145 -630 l5 -23 405 0 404 0 19 28 c12 16 76 258 168 625 82 329 152 603 155
608 3 5 142 8 340 7 l335 -3 -183 -734 c-101 -404 -193 -753 -205 -778 -31
-62 -146 -182 -214 -223 l-58 -35 -886 0 -887 0 -36 28 c-51 39 -98 138 -103
219 -4 55 12 130 135 623 l139 559 -54 90 c-67 111 -102 181 -110 224 l-6 32
466 0 c256 0 466 -2 466 -5z"
        />
      </g>
    </svg>
  );
}
