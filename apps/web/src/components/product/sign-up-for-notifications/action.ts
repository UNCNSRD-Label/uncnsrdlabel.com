"use server";

import { headers } from "@/lib/klaviyo";
import { parseGid } from "@shopify/hydrogen";
import { type KlaviyoResponse } from "@uncnsrdlabel/types";

export async function signUpForNotificationsAction(
  _currentState: any,
  formData: FormData,
) {
  const _shopify_y = formData.get("_shopify_y");
  const email = formData.get("email");
  const phone_number = formData.get("phone_number");
  const variant_id = formData.get("variant_id");

  if (!email) {
    console.error("email not set");
    return {
      message: "email not set",
      ok: false,
      status: 400,
    };
  }

  if (!phone_number) {
    console.error("phone_number not set");
  }

  if (!variant_id) {
    console.error("variant_id not set");
    return {
      message: "variant_id not set",
      ok: false,
      status: 400,
    };
  }

  if (typeof variant_id !== "string") {
    console.error("variant_id should be a string");
    return {
      message: "variant_id should be a string",
      ok: false,
      status: 400,
    };
  }

  let messageKey = "actions.signUpForNotificationsAction.error";

  let ok = false;

  let status = 500;

  const url = "https://a.klaviyo.com/api/back-in-stock-subscriptions/";

  const { id: shopify_id } = parseGid(variant_id);

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({
      data: {
        type: 'back-in-stock-subscription',
        attributes: {
          channels: ['EMAIL'],
          profile: {
            data: {
              type: 'profile',
              // id: '01GDDKASAP8TKDDA2GRZDSVP4H',
              attributes: {
                email,
                // phone_number: '+15005550006',
                external_id: _shopify_y,
              }
            }
          }
        },
        relationships: {
          variant: {
            data: {
              type: 'catalog-variant',
              id: `$shopify:::$default:::${shopify_id}`
            }
          }
        },
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
        messageKey = "actions.signUpForNotificationsAction.success";
      }
    } else {
      console.error(response.status, response.statusText)

      messageKey = "actions.signUpForNotificationsAction.failed";

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
