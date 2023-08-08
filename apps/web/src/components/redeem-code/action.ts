"use server";

import { cookies } from "next/headers";

export async function redeemCodeAction(formData: FormData) {
  const email = formData.get("email");
  const phone_number = formData.get("phone_number");

  if (!email) {
    console.error("email not set");
  }

  if (!phone_number) {
    console.error("phone_number not set");
  }

  cookies().set("statusText", "OK");
}
