"use server";

import {
  cartBuyerIdentityUpdateMutation,
  getShopifyGraphQL,
  recoverAccountHandler,
  resetAccountHandler,
  signInToAccountHandler,
  signUpForAccountHandler,
  updateAccountHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { add, parseISO } from "date-fns";
import { cookies } from "next/headers";

export async function recoverAccountAction(
  _currentState: any,
  formData: FormData,
) {
  const email = formData.get("email");

  if (!email) {
    throw new Error("email not set");
  }

  let message;

  let messageKey = "actions.recoverAccountAction.error";

  let ok = false;

  let status = 500;

  const variables = { email: email as string };

  try {
    const recoverAccountResponse = await recoverAccountHandler({ variables });

    const errors = recoverAccountResponse.customerRecover?.customerUserErrors;

    if (Array.isArray(errors) && errors.length > 0) {
      throw new Error(errors[0].message, {
        cause: errors[0].code,
      });
    }

    ok = true;

    status = 202;

    messageKey = "actions.recoverAccountAction.success";
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

export async function resetAccountAction(
  _currentState: any,
  formData: FormData,
) {
  const email = formData.get("email");
  const password = formData.get("password");
  const resetToken = formData.get("resetToken");

  if (!email) {
    throw new Error("email not set");
  }

  if (!password) {
    throw new Error("password not set");
  }

  if (!resetToken) {
    throw new Error("resetToken not set");
  }

  let message;

  let messageKey = "actions.resetAccountAction.error";

  let ok = false;

  let status = 500;

  const variables = {
    id: "",
    input: {
      email: email as string,
      password: password as string,
      resetToken: resetToken as string,
    },
  };

  try {
    const resetAccountResponse = await resetAccountHandler({ variables });

    const errors = resetAccountResponse.customerReset?.customerUserErrors;

    if (Array.isArray(errors) && errors.length > 0) {
      throw new Error(errors[0].message, {
        cause: errors[0].code,
      });
    }

    if (resetAccountResponse.customerReset?.customerAccessToken?.accessToken) {
      ok = true;

      status = 202;

      messageKey = "actions.resetAccountAction.success";
    } else {
      messageKey = "actions.resetAccountAction.failed";
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

export async function signInToAccountAction(
  _currentState: any,
  formData: FormData,
) {
  const email = formData.get("email");
  const password = formData.get("password");
  const remember = formData.get("remember");

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

  const variables = {
    input: { email: email as string, password: password as string },
  };

  try {
    const signInToAccountResponse = await signInToAccountHandler({ variables });

    const errors =
      signInToAccountResponse.customerAccessTokenCreate?.customerUserErrors;

    if (Array.isArray(errors) && errors.length > 0) {
      throw new Error(errors[0].message, {
        cause: errors[0].code,
      });
    }

    const customerAccessToken =
      signInToAccountResponse.customerAccessTokenCreate?.customerAccessToken;

    if (customerAccessToken) {
      ok = true;

      status = 202;

      messageKey = "actions.signInToAccountAction.success";

      const expires =
        remember === "on"
          ? parseISO(customerAccessToken.expiresAt)
          : add(new Date(), {
              hours: 1,
            });

      cookies().set("customerAccessToken", customerAccessToken.accessToken, {
        expires,
      });

      const cartId = cookies().get("cartId")?.value;

      if (cartId) {
        const variables = {
          buyerIdentity: {
            customerAccessToken: customerAccessToken.accessToken,
          },
          cartId,
        };

        const { cartBuyerIdentityUpdate } = await getShopifyGraphQL(
          cartBuyerIdentityUpdateMutation,
          variables,
        );

        if (
          Array.isArray(cartBuyerIdentityUpdate?.userErrors) &&
          cartBuyerIdentityUpdate?.userErrors.length > 0
        ) {
          throw new Error(cartBuyerIdentityUpdate?.userErrors[0].message, {
            cause: cartBuyerIdentityUpdate?.userErrors[0].code,
          });
        }
      }
    } else {
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
  const confirmPassword = formData.get("confirmPassword");

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

  const variables = {
    input: { email: email as string, password: password as string },
  };

  try {
    const signUpForAccountResponse = await signUpForAccountHandler({
      variables,
    });

    const signUpForAccountErrors =
      signUpForAccountResponse.customerCreate?.customerUserErrors;

    if (
      Array.isArray(signUpForAccountErrors) &&
      signUpForAccountErrors.length > 0
    ) {
      throw new Error(signUpForAccountErrors[0].message, {
        cause: signUpForAccountErrors[0].code,
      });
    }

    if (signUpForAccountResponse.customerCreate?.customer?.id) {
      ok = true;

      status = 202;

      messageKey = "actions.signUpForAccountAction.success";
    } else {
      messageKey = "actions.signUpForAccountAction.failed";
    }

    const signInToAccountResponse = await signInToAccountHandler({ variables });

    const signInToAccountErrors =
      signInToAccountResponse.customerAccessTokenCreate?.customerUserErrors;

    if (
      Array.isArray(signInToAccountErrors) &&
      signInToAccountErrors.length > 0
    ) {
      throw new Error(signInToAccountErrors[0].message, {
        cause: signInToAccountErrors[0].code,
      });
    }

    const customerAccessToken =
      signInToAccountResponse.customerAccessTokenCreate?.customerAccessToken;

    if (customerAccessToken) {
      ok = true;

      status = 202;

      messageKey = "actions.signInToAccountAction.success";

      const expires = parseISO(customerAccessToken.expiresAt);

      cookies().set("customerAccessToken", customerAccessToken.accessToken, {
        expires,
      });
    } else {
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

export async function updateAccountAction(
  _currentState: any,
  formData: FormData,
) {
  const acceptsMarketing = formData.get("acceptsMarketing") as "on" | "off";
  const email = formData.get("email") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const phone = formData.get("phone") as string;

  let message;

  let messageKey = "actions.updateAccountAction.error";

  let ok = false;

  let status = 500;

  const customerAccessToken = cookies().get("customerAccessToken")?.value;

  if (!customerAccessToken) {
    throw new Error("customerAccessToken not set");
  }

  const input = {
    acceptsMarketing: acceptsMarketing === "on" ? true : false,
    email,
    firstName,
    lastName,
    phone,
  };

  const variables = { customerAccessToken, input };

  try {
    const updateAccountResponse = await updateAccountHandler({ variables });

    const errors = updateAccountResponse.customerUpdate?.customerUserErrors;

    if (Array.isArray(errors) && errors.length > 0) {
      throw new Error(errors[0].message, {
        cause: errors[0].code,
      });
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
