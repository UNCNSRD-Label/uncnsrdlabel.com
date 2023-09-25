"use server";

import { cookies } from "next/headers";

export async function signUp(formData: FormData) {
  const email = formData.get("email");
  const phone_number = formData.get("phone_number");

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
          custom_source: "Sign Up Form (Footer)",
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

  try {
    const response = await fetch(url, options);

    if (response.status >= 300) {
      const json = await response.json();

      if (json.errors) {
        console.error(`${response.status}, ${response.statusText}`);
        console.error(json.errors);
      }

      cookies().set("statusText", response.statusText);

      return response.statusText;
    } else {
      cookies().set("statusText", "OK");
      return "OK";
    }
  } catch (err) {
    console.error(err);
    cookies().set("statusText", "Error");
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    
    if (typeof err === "string") {
      throw new Error(err);
    }
  }
}
