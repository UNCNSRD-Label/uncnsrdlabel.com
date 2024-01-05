"use client";

import { LogotypeIcon } from "@/components/icons/logotype";
import { useGetIntl } from "@/lib/i18n";
import { Button } from "@uncnsrdlabel/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  const intl = useGetIntl("page.error");

  return (
    <div className="mx-4 my-16 grid h-96 place-content-center place-items-center gap-8">
      <LogotypeIcon className="w-96 fill-inherit" />
      <h2>{intl.formatMessage({ id: "title" })}</h2>
      <p>{intl.formatMessage({ id: "message" })}</p>
      <Button variant="default" size="lg" onClick={() => reset()}>
        {intl.formatMessage({ id: "button" })}
      </Button>
    </div>
  );
}
