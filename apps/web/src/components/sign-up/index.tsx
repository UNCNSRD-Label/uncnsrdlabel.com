import { LoadingDots } from "@/components/loading/dots";
import { SignUpForm } from "@/components/sign-up/form";
import { getDictionary } from "@/lib/dictionary";
import { state$ } from "@/lib/store";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function SignUp({ className }: { className?: string }) {
  const lang = state$.lang.get();

  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <section className={cn("grid gap-4", className)}>
      <h3 className="text-sm uppercase">{intl.formatMessage({ id: "component.SignUp.title" })}</h3>
      <span className="text-xs">
        {intl.formatMessage({ id: "component.SignUp.summary" })}
      </span>
      <Suspense fallback={<LoadingDots />}>
        <SignUpForm dictionary={dictionary} />
      </Suspense>
    </section>
  );
}
