export const domain = `https://${process.env
  .NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!}`;

export const endpoint = `${domain}/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_API_VERSION}/graphql.json`;
