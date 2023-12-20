import { Suspense } from "react";
import { ConsentButton } from "./button";
import { ConsentDialog } from "./dialog";

export function ConsentTrigger({ className }: { className?: string }) {
  return (
    <Suspense fallback={<ConsentButton className={className} />}>
        <ConsentDialog className={className} />
    </Suspense>
  );
}
