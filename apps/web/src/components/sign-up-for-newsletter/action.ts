"use server";

import { headers } from "@/lib/klaviyo";
import { type KlaviyoResponse } from "@uncnsrdlabel/types";

export async function signUpForNewsletterAction(
  _currentState: any,
  formData: FormData,
) {
  const custom_source = formData.get("custom_source") ?? "Website";
  const email = formData.get("email");
  const phone_number = formData.get("phone_number");

  if (!email) {
    console.error("email not set");
  }

  if (!phone_number) {
    console.error("phone_number not set");
  }

  let messageKey = "actions.signUpForNewsletterAction.error";

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
        messageKey = "actions.signUpForNewsletterAction.success";
      }
    } else {
      console.error(response.status, response.statusText)

      messageKey = "actions.signUpForNewsletterAction.failed";

      if (response.status >= 300) {
        const json = (await response.json()) as KlaviyoResponse;

        if (json.errors) {
          console.error(`${response.status}, ${response.statusText}`);
          console.error(json.errors);
        }

        messageKey = response.statusText ?? json.errors?.[0];
      }
    }
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      messageKey = error.message;
    } else if (typeof error === "string") {
      messageKey = error;
    }
  } finally {
    return {
      messageKey,
      ok,
      status,
    };
  }
}
