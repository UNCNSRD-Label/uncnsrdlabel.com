import { experimental_taintUniqueValue } from 'react';
import "server-only";

experimental_taintUniqueValue(
    'Do not pass the API token password to the client.  Instead do all fetches on the server.',
    process,
    process.env.KLAVIYO_PRIVATE_KEY
);

experimental_taintUniqueValue(
    'Do not pass the API token password to the client.  Instead do all fetches on the server.',
    process,
    process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN
);

experimental_taintUniqueValue(
    'Do not pass the API token password to the client.  Instead do all fetches on the server.',
    process,
    process.env.SHOPIFY_PRIVATE_ACCESS_TOKEN
);

experimental_taintUniqueValue(
    'Do not pass the API token password to the client.  Instead do all fetches on the server.',
    process,
    process.env.SHOPIFY_REVALIDATION_SECRET
);