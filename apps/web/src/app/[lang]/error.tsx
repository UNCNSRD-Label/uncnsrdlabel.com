"use client";

import { LogotypeIcon } from "@/components/icons/logotype";
// import { state$ } from "@/lib/store";
import { Button } from "@uncnsrdlabel/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  // const intl = state$.intl.get();

  return (
    <div className="mx-4 my-16 grid h-96 place-content-center place-items-center gap-8">
      <LogotypeIcon className="w-96 fill-inherit" />
      {/* <h2>{intl.formatMessage({ id: "page.error.title" })}</h2> */}
      {/* <p>{intl.formatMessage({ id: "page.error.message" })}</p> */}
      <Button variant="default" size="lg" onClick={() => reset()}>
        {/* {intl.formatMessage({ id: "page.error.button" })} */}
        AAAA
      </Button>
    </div>
  );
}
