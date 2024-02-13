"use server";

import { getDictionary } from "@/lib/dictionary";
import { headers } from "@/lib/klaviyo";
import { type KlaviyoResponse } from "@uncnsrdlabel/types";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function signUpAction(
  _currentState: any,
  formData: FormData,
) {
  const custom_source = formData.get("custom_source") ?? "Website";
  const email = formData.get("email");
  const lang = formData.get("lang") as Intl.BCP47LanguageTag;
  const phone_number = formData.get("phone_number");

  const dictionary = getDictionary({ lang });

  const messages: ResolvedIntlConfig["messages"] = await dictionary;

  const intl = createIntl({
    locale: lang,
    messages,
  });

  if (!email) {
    console.error("email not set");
  }

  if (!phone_number) {
    console.error("phone_number not set");
  }

  let message = intl.formatMessage({ id: "actions.signUpAction.error" });

  let ok = false;

  let status = 500;

  const url = "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/";

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({
      data: {
        type: "profile-subscription-bulk-create-job",
        attributes: {
          custom_source,
          profiles: {
            data: [
              {
                type: 'profile',
                // id: '01GDDKASAP8TKDDA2GRZDSVP4H',
                attributes: {
                  email,
                  // phone_number: '+15005550006',
                  subscriptions: {
                    email: {marketing: {consent: 'SUBSCRIBED', consented_at: new Date().toISOString()}},
                    // sms: {marketing: {consent: 'SUBSCRIBED', consented_at: new Date().toISOString()}}
                  }
                }
              }
            ]
          },
        },
        relationships: { list: { data: { type: 'list', id: process.env.KLAVIYO_LIST_ID_NEWSLETTER } } }
      },
    }),
  };

  try {
    const response = await fetch(url, options);

    ok = response.ok;

    status = response.status;

    console.info(response.status, response.statusText, response.ok);

    if (response.ok) {
      if (response.status === 202) {
        message = intl.formatMessage({ id: "actions.signUpAction.success" });
      }
    } else {
      console.error(response.status, response.statusText)

      message = intl.formatMessage({ id: "actions.signUpAction.failed" }, { status: response.status });

      if (response.status >= 300) {
        const json = (await response.json()) as KlaviyoResponse;

        if (json.errors) {
          console.error(`${response.status}, ${response.statusText}`);
          console.error(json.errors);
        }

        message = response.statusText ?? json.errors?.[0];
      }
    }
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === "string") {
      message = error;
    }
  } finally {
    return {
      message,
      ok,
      status,
    };
  }
}
