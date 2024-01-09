import { LoadingDots } from "@/components/loading/dots";
import { SignUpForm } from "@/components/sign-up/form";
import { state$ } from "@/lib/store";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";

export async function SignUp({ className }: { className?: string }) {
  const intl = state$.intl.get();

  return (
    <section className={cn("grid gap-4", className)}>
      <h3 className="text-sm uppercase">{intl.formatMessage({ id: "component.SignUp.title" })}</h3>
      <span className="text-xs">
        {intl.formatMessage({ id: "component.SignUp.summary" })}
      </span>
      <Suspense fallback={<LoadingDots />}>
        <SignUpForm />
      </Suspense>
    </section>
  );
}
