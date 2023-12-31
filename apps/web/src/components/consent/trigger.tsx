import { Suspense } from "react";
import { Button } from "./button";
import { ConsentDialog } from "./dialog";

export function ConsentTrigger({ className }: { className?: string }) {
  return (
    <Suspense fallback={<Button className={className} />}>
        <ConsentDialog className={className} />
    </Suspense>
  );
}
