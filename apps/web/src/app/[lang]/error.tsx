"use client";

import { LogotypeIcon } from "@/components/icons/logotype";
import { NavigationEvents } from "@/components/navigation-events";
import { Button } from "@uncnsrdlabel/components/atoms/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <>
      <div className="mx-4 my-16 grid h-96 place-content-center place-items-center gap-8">
        <LogotypeIcon className="w-96 fill-inherit" />
        <h2>An error occurred</h2>
        <p>An error occurred while trying to access the requested resource</p>
        <Button variant="default" size="lg" onClick={() => reset()}>
          Try again
        </Button>
      </div>
      <NavigationEvents pageType="forbidden" />
    </>
  );
}
