import { state$ } from "@/lib/store";
import { Server } from "@uncnsrdlabel/graphql-shopify-storefront";

const lang = state$.lang.get();

export const server = new Server(lang);