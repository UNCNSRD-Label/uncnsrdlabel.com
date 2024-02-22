import { LoadingDots } from "@/components/loading/dots";
import { SignUpForNewsletterForm } from "@/components/sign-up-for-newsletter/form";
import { getDictionary } from "@/lib/dictionary";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function SignUpForNewsletter({ className, lang, }: { className?: string; lang: Intl.BCP47LanguageTag; }) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <section className={cn("grid gap-4", className)}>
      <h3 className="text-sm uppercase">{intl.formatMessage({ id: "component.SignUpForNewsletter.title" })}</h3>
      <span className="text-xs">
        {intl.formatMessage({ id: "component.SignUpForNewsletter.summary" })}
      </span>
      <Suspense fallback={<LoadingDots />}>
        <SignUpForNewsletterForm dictionary={dictionary} lang={lang} />
      </Suspense>
    </section>
  );
}
