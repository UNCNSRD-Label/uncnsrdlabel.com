// import "react";
// import { type HTMLAttributes } from "react";

// import { HTMLAttributes } from "react";
// import "react/jsx-runtime";

// declare module 'react' {
//     interface IntrinsicElements {
//         "square-placement": {}
//     }
// }

// declare module "react/jsx-runtime" {
//   namespace JSX {
//     interface IntrinsicElements {
//       "square-placement": JSX.IntrinsicElements["div"];
//       // "square-placement": HTMLAttributes<{}>;
//     }
//   }
// }

declare namespace JSX {
  interface IntrinsicElements {
    'square-placement': SquarePlacementProps;
  }
}

interface SquarePlacementProps {
  'data-mpid'?: string;
  'data-placement-id'?: string;
  'data-page-type'?: string;
  'data-amount'?: string;
  'data-currency'?: string;
  'data-consumer-locale'?: string;
  'data-item-skus'?: string;
  'data-item-categories'?: string;
  'data-is-eligible'?: string;
}
