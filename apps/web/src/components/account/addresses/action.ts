"use server";

import {
    customerDefaultAddressUpdateMutation,
    getShopifyGraphQL,
    mailingAddressCreateMutation,
    mailingAddressDeleteMutation,
    mailingAddressUpdateMutation
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cookies } from 'next/headers';

export async function addAddressAction(
    _currentState: any,
    formData: FormData,
) {
    const address1 = formData.get("address1") as string;
    const address2 = formData.get("address2") as string;
    const city = formData.get("city") as string;
    const company = formData.get("company") as string;
    const country = formData.get("country") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const province = formData.get("province") as string;
    const zip = formData.get("zip") as string;

    let message;

    let messageKey = "actions.addAddressAction.error";

    let ok = false;

    let status = 500;

    const customerAccessToken = cookies().get('customerAccessToken')?.value;

    if (!customerAccessToken) {
        throw new Error("customerAccessToken not set");
    }

    const input = {
        address1,
        address2,
        city,
        company,
        country,
        firstName,
        lastName,
        phone,
        province,
        zip,
    };

    const variables = { customerAccessToken, input }

    try {
        const mailingAddressCreateMutationResponse = await getShopifyGraphQL(mailingAddressCreateMutation, variables);

        const errors = mailingAddressCreateMutationResponse.mailingAddressCreate?.customerUserErrors;

        if (
            Array.isArray(errors) && errors.length > 0
        ) {
            throw new Error(
                errors[0].message,
                {
                    cause:
                        errors[0].code,
                },
            )
        }

        ok = true;

        status = 202;

        messageKey = "actions.addAddressAction.success";
    } catch (error) {
        console.error(error);

        if (error instanceof Error) {
            messageKey = error.message;
        } else if (typeof error === "string") {
            messageKey = error;
        }
    } finally {
        return {
            message,
            messageKey,
            ok,
            status,
        };
    }
}

export async function deleteAddressAction(
    _currentState: any,
    formData: FormData,
) {
    const id = formData.get("id") as string;

    let message;

    let messageKey = "actions.deleteAddressAction.error";

    let ok = false;

    let status = 500;

    const customerAccessToken = cookies().get('customerAccessToken')?.value;

    if (!customerAccessToken) {
        throw new Error("customerAccessToken not set");
    }

    const variables = { customerAccessToken, id }

    try {
        const mailingAddressDeleteMutationResponse = await getShopifyGraphQL(mailingAddressDeleteMutation, variables);

        const errors = mailingAddressDeleteMutationResponse.mailingAddressDelete?.customerUserErrors;

        if (
            Array.isArray(errors) && errors.length > 0
        ) {
            throw new Error(
                errors[0].message,
                {
                    cause:
                        errors[0].code,
                },
            )
        }

        ok = true;

        status = 202;

        messageKey = "actions.deleteAddressAction.success";
    } catch (error) {
        console.error(error);

        if (error instanceof Error) {
            messageKey = error.message;
        } else if (typeof error === "string") {
            messageKey = error;
        }
    } finally {
        return {
            message,
            messageKey,
            ok,
            status,
        };
    }
}

export async function updateAddressAction(
    _currentState: any,
    formData: FormData,
) {
    const address1 = formData.get("address1") as string;
    const address2 = formData.get("address2") as string;
    const city = formData.get("city") as string;
    const company = formData.get("company") as string;
    const country = formData.get("country") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const province = formData.get("province") as string;
    const zip = formData.get("zip") as string;

    const id = formData.get("id") as string;

    let message;

    let messageKey = "actions.updateAccountAction.error";

    let ok = false;

    let status = 500;

    const customerAccessToken = cookies().get('customerAccessToken')?.value;

    if (!customerAccessToken) {
        throw new Error("customerAccessToken not set");
    }

    const input = {
        address1,
        address2,
        city,
        company,
        country,
        firstName,
        lastName,
        phone,
        province,
        zip,
    };

    const variables = { customerAccessToken, id, input }

    try {
        const mailingAddressUpdateMutationResponse = await getShopifyGraphQL(mailingAddressUpdateMutation, variables);

        const errors = mailingAddressUpdateMutationResponse.mailingAddressUpdate?.customerUserErrors;

        if (
            Array.isArray(errors) && errors.length > 0
        ) {
            throw new Error(
                errors[0].message,
                {
                    cause:
                        errors[0].code,
                },
            )
        }

        ok = true;

        status = 202;

        messageKey = "actions.updateAccountAction.success";
    } catch (error) {
        console.error(error);

        if (error instanceof Error) {
            messageKey = error.message;
        } else if (typeof error === "string") {
            messageKey = error;
        }
    } finally {
        return {
            message,
            messageKey,
            ok,
            status,
        };
    }
}

export async function setDefaultAddressAction(
    _currentState: any,
    formData: FormData,
) {
    const id = formData.get("id") as string;

    let message;

    let messageKey = "actions.setDefaultAddressAction.error";

    let ok = false;

    let status = 500;

    const customerAccessToken = cookies().get('customerAccessToken')?.value;

    if (!customerAccessToken) {
        throw new Error("customerAccessToken not set");
    }

    const variables = { customerAccessToken, id }

    try {
        const customerDefaultAddressUpdateMutationResponse = await getShopifyGraphQL(customerDefaultAddressUpdateMutation, variables);

        const errors = customerDefaultAddressUpdateMutationResponse.customerDefaultAddressUpdate?.customerUserErrors;

        if (
            Array.isArray(errors) && errors.length > 0
        ) {
            throw new Error(
                errors[0].message,
                {
                    cause:
                        errors[0].code,
                },
            )
        }

        ok = true;

        status = 202;

        messageKey = "actions.setDefaultAddressAction.success";
    } catch (error) {
        console.error(error);

        if (error instanceof Error) {
            messageKey = error.message;
        } else if (typeof error === "string") {
            messageKey = error;
        }
    } finally {
        return {
            message,
            messageKey,
            ok,
            status,
        };
    }
}