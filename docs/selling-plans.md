# Mutations

abstract

## Create a selling plan group

### Mutation

```graphql
mutation {
  sellingPlanGroupCreate(
    input: {
      name: "Pre-order"
      merchantCode: "pre-order"
      options: ["Pre-order"]
      sellingPlansToCreate: [
        {
          name: "Pre Order Product with 100% deposit"
          category: PRE_ORDER
          options: ["100% deposit. No Due Balance"]
          billingPolicy: {
            fixed: {
              checkoutCharge: { type: PERCENTAGE, value: { percentage: 100.0 } }
              remainingBalanceChargeTrigger: NO_REMAINING_BALANCE
            }
          }
          pricingPolicies: [
            {
              fixed: {
                adjustmentType: PERCENTAGE
                adjustmentValue: { percentage: 0.0 }
              }
            }
          ]
          deliveryPolicy: { fixed: { fulfillmentTrigger: UNKNOWN } }
          inventoryPolicy: { reserve: ON_FULFILLMENT }
        }
      ]
    }
    resources: { productVariantIds: [], productIds: [] }
  ) {
    sellingPlanGroup {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```

## Add products to a selling plan group

### Mutation

```graphql
mutation SellingPlanGroupAddProducts($id: ID!, $productIds: [ID!]!) {
  sellingPlanGroupAddProducts(id: $id, productIds: $productIds) {
    sellingPlanGroup {
      id
    }
    userErrors {
      field
      message
    }
  }
}
```

### Variables

```json
{
  "id": "gid://shopify/SellingPlanGroup/78011924802",
  "productIds": ["gid://shopify/Product/8665771639106"]
}
```

## Remove products from a selling plan group

### Mutation

```graphql
mutation mutateSellingPlanGroupRemoveProducts($id: ID!, $productIds: [ID!]!) {
  sellingPlanGroupRemoveProducts(id: $id, productIds: $productIds) {
    removedProductIds
    userErrors {
      field
      message
    }
  }
}
```

### Variables

```json
{
  "id": "gid://shopify/SellingPlanGroup/78011924802",
  "productIds": ["gid://shopify/Product/8665771639106"]
}
```
