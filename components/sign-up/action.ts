"use server";

export async function signUpAction(
  formData: FormData,
  custom_source: string = "Website",
) {
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

  try {
    const response = await fetch(url, options);

    console.log(response.status, response.statusText);

    if (response.status >= 300) {
      const json = (await response.json()) as KlaviyoResponse;

      if (json.errors) {
        console.error(`${response.status}, ${response.statusText}`);
        console.error(json.errors);
      }

      return response.statusText;
    } else if (response.status >= 200) {
      return response.statusText;
    } else {
      return response.statusText;
    }
  } catch (err) {
    console.error(err);
    return "Error";
  }
}
