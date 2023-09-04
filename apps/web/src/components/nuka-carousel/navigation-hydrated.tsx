import { type CSSProperties } from "react";

import { dehydrate, Hydrate } from "@tanstack/react-query";

import getQueryClient from "@/clients/react-query";

import { get } from "@/utils/hygraph";

import { dashboardMenuQueryDocument, variables, default as Navigation } from "./navigation";

export default async function NavigationHydrated({ style }: { style?: CSSProperties }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["dashboardMenu"], () => get(dashboardMenuQueryDocument, variables));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Navigation id="sidebar" style={style} />
    </Hydrate>
  );
}
