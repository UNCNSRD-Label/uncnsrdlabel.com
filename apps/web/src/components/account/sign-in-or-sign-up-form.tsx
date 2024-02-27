"use client";

import { SignInToAccountForm } from "@/components/account/sign-in-form";
import { SignUpForAccountForm } from "@/components/account/sign-up-form";
import { createIntl } from "@formatjs/intl";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@uncnsrdlabel/components/atoms/tabs";
import { Usable, use, useState } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function AccountSignInOrSignUpForm({
  dictionary,
  lang,
}: {
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const [activeTab, setActiveTab] = useState("sign-in");

  return (
    <div className="grid gap-8 p-8 lg:shadow bg-opaque-white">
      <h1 className="text-lg sm:text-xl md:text-3xl">
        {intl.formatMessage({
          id: "component.AccountSignInOrSignUpForm.title",
        })}
      </h1>
      <Tabs className="w-full" defaultValue="sign-in" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="mb-4 grid grid-cols-2">
          <TabsTrigger value="sign-in">
            {intl.formatMessage({
              id: "component.AccountSignInOrSignUpForm.tabs.sign-in",
            })}
          </TabsTrigger>
          <TabsTrigger value="sign-up">
            {intl.formatMessage({
              id: "component.AccountSignInOrSignUpForm.tabs.sign-up",
            })}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignInToAccountForm
            className="sm:bg-transparent p-0 sm:p-4 md:p-8 sm:min-w-[36rem]"
            dictionary={dictionary}
            lang={lang}
            setActiveTab={setActiveTab}
          />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUpForAccountForm
            className="sm:bg-transparent p-0 sm:p-4 md:p-8 sm:min-w-[36rem]"
            dictionary={dictionary}
            lang={lang}
            setActiveTab={setActiveTab}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
