import { LoadingDots } from "@/components/loading/dots";
import { signUpAction } from "@/components/sign-up/action";
import { SignUpForm } from "@/components/sign-up/form";
import { getIntl } from "@/lib/i18n";
import { state$ } from "@/lib/store";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";

export async function SignUp({ className }: { className?: string }) {
  const lang = state$.lang.get();

  const intl = await getIntl(lang, "component.SignUp");

  return (
    <section className={cn("grid gap-4", className)}>
      <h3 className="text-sm uppercase">{intl.formatMessage({ id: "title" })}</h3>
      <span className="text-xs">
        {intl.formatMessage({ id: "summary" })}
      </span>
      <Suspense fallback={<LoadingDots />}>
        <SignUpForm action={signUpAction} />
      </Suspense>
    </section>
  );
}
