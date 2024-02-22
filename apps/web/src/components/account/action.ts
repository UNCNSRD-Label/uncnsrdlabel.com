"use server";

import { signInToAccountHandler, signUpForAccountHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { parseISO } from "date-fns";
import { cookies } from 'next/headers';

export async function signInToAccountAction(
  _currentState: any,
  formData: FormData,
) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email) {
    throw new Error("email not set");
  }

  if (!password) {
    throw new Error("password not set");
  }

  let message;

  let messageKey = "actions.signInToAccountAction.error";

  let ok = false;

  let status = 500;

  const variables = { input: { email: email as string, password: password as string } }

  try {
    const signInToAccountResponse = await signInToAccountHandler({ variables });

    if (signInToAccountResponse.customerAccessTokenCreate?.customerAccessToken) {
      ok = true;

      status = 202;

      messageKey = "actions.signInToAccountAction.success";
    } else {
      console.error(signInToAccountResponse.customerAccessTokenCreate?.customerUserErrors);

      message = signInToAccountResponse.customerAccessTokenCreate?.customerUserErrors?.[0]?.message;

      messageKey = "actions.signInToAccountAction.failed";
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
      message,
      messageKey,
      ok,
      status,
    };
  }
}

export async function signUpForAccountAction(
  _currentState: any,
  formData: FormData,
) {
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  if (!email) {
    throw new Error("email not set");
  }

  if (!password) {
    throw new Error("password not set");
  }

  if (!confirmPassword) {
    throw new Error("password not set");
  }

  if (password !== confirmPassword) {
    throw new Error("passwords do not match");
  }

  let message;

  let messageKey = "actions.signUpForAccountAction.error";

  let ok = false;

  let status = 500;

  const variables = { input: { email: email as string, password: password as string } }

  try {
    const signUpForAccountResponse = await signUpForAccountHandler({ variables });

    const errors = signUpForAccountResponse.customerCreate?.customerUserErrors;

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

    if (signUpForAccountResponse.customerCreate?.customer?.id) {
      ok = true;

      status = 202;

      messageKey = "actions.signUpForAccountAction.success";
    } else {
      console.error(signUpForAccountResponse.customerCreate?.customerUserErrors);

      message = signUpForAccountResponse.customerCreate?.customerUserErrors?.[0]?.message;

      messageKey = "actions.signUpForAccountAction.failed";
    }

    const signInToAccountResponse = await signInToAccountHandler({ variables });

    const customerAccessToken = signInToAccountResponse.customerAccessTokenCreate?.customerAccessToken;

    if (customerAccessToken) {
      ok = true;

      status = 202;

      messageKey = "actions.signInToAccountAction.success";

      const expires = parseISO(customerAccessToken.expiresAt);

      cookies().set('accessToken', customerAccessToken.accessToken, { expires })
    } else {
      console.error(signInToAccountResponse.customerAccessTokenCreate?.customerUserErrors);

      message = signInToAccountResponse.customerAccessTokenCreate?.customerUserErrors?.[0]?.message;

      messageKey = "actions.signInToAccountAction.failed";
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
      message,
      messageKey,
      ok,
      status,
    };
  }
}