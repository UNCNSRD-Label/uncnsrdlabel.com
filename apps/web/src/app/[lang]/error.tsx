"use client";

import { LogotypeIcon } from "@/components/icons/logotype";
import { Button } from "@uncnsrdlabel/components/ui/button";

export default function Error({ reset }: { reset: () => void; }) {
  return (
    <div className="mx-4 my-16 grid h-96 place-content-center place-items-center gap-8">
      <LogotypeIcon className="w-96 fill-inherit" />
      <h2>Not found</h2>
      <p>Could not find requested resource</p>
      <Button variant="default" size="lg" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
