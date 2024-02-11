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

declare namespace JSX {
  interface IntrinsicElements {
    'square-placement': SquarePlacementProps;
  }
}