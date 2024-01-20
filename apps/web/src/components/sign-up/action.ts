"use server";

import { type KlaviyoResponse } from "@uncnsrdlabel/types";

export async function signUpAction(
  _currentState: any,
  formData: FormData,
) {
  const email = formData.get("email");
  const phone_number = formData.get("phone_number");
  const custom_source = formData.get("custom_source") ?? "Website";

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
          list_id: process.env.KLAVIYO_LIST_ID,
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

  let message = "Something went wrong. Please try again.";

  let status = 500;

  try {
    const response = await fetch(url, options);

    status = response.status;

    console.info(response.status, response.statusText);

    if (response?.ok) {
      message = "Email address submitted successfully!";

      if (response.status >= 300) {
        const json = (await response.json()) as KlaviyoResponse;

        if (json.errors) {
          console.error(`${response.status}, ${response.statusText}`);
          console.error(json.errors);
        }

        message = response.statusText ?? json.errors?.[0];
      }

      if (response.status === 202) {
        message = "You have successfully signed up to our mailing list!";
      }
    } else {
      console.error(response?.status, response?.statusText)

      message = `Email address submission failed with HTTP Response Code: ${response?.status}`;
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
