"use client";

import LogomarkIcon from "@/components/icons/logotype";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-4 my-16 grid h-96 place-content-center place-items-center gap-8">
      <LogomarkIcon className="w-96 fill-inherit" />
      <h2>Something went wrong.</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
