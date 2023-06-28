import { SlEnvolope } from "react-icons/sl";

async function signUp(formData: FormData) {
  "use server";

  if (!process.env.KLAVIYO_PRIVATE_KEY || !process.env.KLAVIYO_LIST_ID) {
    return null;
  }

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
    }
  } catch (err) {
    console.error(err);
  }
}

export default function SignUp({ className }: { className?: string }) {
  return (
    <div className={className}>
      <form
        action={signUp}
        className={"grid gap-4 [&:has(input:valid)>button]:opacity-100"}
      >
        <div className="field">
          <input
            autoComplete="true"
            className="w-full bg-gray-800/50 px-4 py-2 placeholder:text-inherit"
            name="email"
            placeholder="Sign up to our newsletter"
            required
            type="email"
          />
          <button className="absolute right-0 mr-3">
            <SlEnvolope />
          </button>
        </div>
        {/* <input
        type="tel"
        name="phone_number"
        placeholder="Sign up to our newsletter"
        className="w-full px-4 py-2"
      /> */}
        <button className="btn btn-primary btn-solid btn-sm justify-self-end opacity-0">
          Sign up
        </button>
        <span className="text-xs">
          Sign up and receive 10% off your first purchase
        </span>
      </form>
    </div>
  );
}
