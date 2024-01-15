"use client";

import { LogotypeIcon } from "@/components/icons/logotype";
// import { state$ } from "@/lib/store";
// import { createIntl } from "@formatjs/intl";
// import { useSelector } from "@legendapp/state/react";
import { Button } from "@uncnsrdlabel/components/ui/button";
// import { use } from "react";
// import { type ResolvedIntlConfig } from "react-intl";

export default function Error({ reset }: { reset: () => void }) {
  // const messages = use<ResolvedIntlConfig["messages"]>(getDictionary);

  // const locale = useSelector<string>(() => state$.lang.get());

  // const intl = createIntl({
  //   locale,
  //   messages,
  // });

  return (
    <div className="mx-4 my-16 grid h-96 place-content-center place-items-center gap-8">
      <LogotypeIcon className="w-96 fill-inherit" />
      {/* <h2>{intl.formatMessage({ id: "page.error.title" })}</h2> */}
      {/* <p>{intl.formatMessage({ id: "page.error.message" })}</p> */}
      <Button variant="default" size="lg" onClick={() => reset()}>
        {/* {intl.formatMessage({ id: "page.error.button" })} */}
      </Button>
    </div>
  );
}
