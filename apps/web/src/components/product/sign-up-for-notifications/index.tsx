import { LoadingDots } from "@/components/loading/dots";
import { SignUpForNotificationsForm } from "@/components/product/sign-up-for-notifications/form";
import { getDictionary } from "@/lib/dictionary";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function SignUpForNotifications({ className, lang }: { className?: string; lang: Intl.BCP47LanguageTag; }) {
  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <section className={cn("grid gap-4", className)}>
      <h3 className="text-sm uppercase">{intl.formatMessage({ id: "component.SignUpForNotifications.title" })}</h3>
      <span className="text-xs">
        {intl.formatMessage({ id: "component.SignUpForNotifications.summary" })}
      </span>
      <Suspense fallback={<LoadingDots />}>
        <SignUpForNotificationsForm dictionary={dictionary} lang={lang} />
      </Suspense>
    </section>
  );
}
