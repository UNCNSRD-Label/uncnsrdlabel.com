"use server";

import { getDictionary } from "@/lib/dictionary";
import { type KlaviyoResponse } from "@uncnsrdlabel/types";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export async function signUpForNotificationsAction(
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

  const url =
    "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      revision: "2023-02-22",
      "content-type": "application/json",
      Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`,
    },
    body: JSON.stringify({
      data: {
        type: "profile-subscription-bulk-create-job",
        attributes: {
          list_id: process.env.KLAVIYO_LIST_ID_OUT_OF_STOCK_NOTIFICATIONS,
          custom_source,
          subscriptions: [
            {
              channels: {
                email: ["MARKETING"],
                // sms: ['MARKETING']
              },
              email,
              // phone_number
              // profile_id: '01GDDKASAP8TKDDA2GRZDSVP4H'
            },
          ],
        },
      },
    }),
  };

  let message = intl.formatMessage({ id: "actions.signUpForNotificationsAction.error" });

  let status = 500;

  try {
    const response = await fetch(url, options);

    status = response.status;

    console.info(response.status, response.statusText);

    if (response?.ok) {
      if (response.status >= 300) {
        const json = (await response.json()) as KlaviyoResponse;

        if (json.errors) {
          console.error(`${response.status}, ${response.statusText}`);
          console.error(json.errors);
        }

        message = response.statusText ?? json.errors?.[0];
      }

      if (response.status === 202) {
        message = intl.formatMessage({ id: "actions.signUpForNotificationsAction.success" });
      }
    } else {
      console.error(response?.status, response?.statusText)

      message = intl.formatMessage({ id: "actions.signUpForNotificationsAction.failed" }, { status: response?.status });
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
      status,
    };
  }
}
