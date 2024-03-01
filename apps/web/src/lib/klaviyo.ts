import { getDictionary } from "@/lib/dictionary";
import { type KlaviyoResponse } from "@uncnsrdlabel/types";
import { createIntl, type ResolvedIntlConfig } from "react-intl";

export const headers = {
    accept: "application/json",
    revision: "2023-12-15",
    "content-type": "application/json",
    Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`,
};

export async function findUserByEmail(formData: FormData) {
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

    let message = intl.formatMessage({ id: "actions.signUpForBackInStockSubscriptionAction.error" });

    let ok = false;

    let status = 500;

    const url = `https://a.klaviyo.com/api/v2/people/search?email=${email}`;

    const options = {
        method: "POST",
        headers,
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

    try {
        const response = await fetch(url, options);

        ok = response.ok;

        status = response.status;

        console.info(response.status, response.statusText);

        if (response?.ok) {
            console.info('ok');
            if (response.status >= 300) {
                const json = (await response.json()) as KlaviyoResponse;

                if (json.errors) {
                    console.error(`${response.status}, ${response.statusText}`);
                    console.error(json.errors);
                }

                message = response.statusText ?? json.errors?.[0];
            }

            if (response.status === 202) {
                message = intl.formatMessage({ id: "actions.signUpForBackInStockSubscriptionAction.success" });
            }
        } else {
            console.error(response?.status, response?.statusText)

            message = intl.formatMessage({ id: "actions.signUpForBackInStockSubscriptionAction.failed" }, { status: response?.status });
        }
    } catch (error) {
        console.error(error);

        if (error instanceof Error) {
            message = error.message;
        } else if (typeof error === "string") {
            message = error;
        }
    } finally {
        console.debug({ message, ok, status })
        return {
            message,
            ok,
            status,
        };
    }
}