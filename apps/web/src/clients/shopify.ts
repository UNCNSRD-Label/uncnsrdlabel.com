import { state$ } from "@/lib/store";
import { Server } from "@uncnsrdlabel/graphql-shopify-storefront";

export let server: Server | null = null;

state$.onChange(({ value }) => {
    server = new Server(value.lang);
})