"use server";

export async function checkCode(formData: FormData) {
  try {
    const accessCodeReceived = `${formData.get("code-1")}${formData.get(
      "code-2"
    )}${formData.get("code-3")}${formData.get("code-4")}`;
    
    const accessCodeActual = process.env.NEXT_PUBLIC_PREVIEW_ACCESS_CODE!;
    
    const match = accessCodeReceived === accessCodeActual;

    return match;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    if (typeof err === "string") {
      throw new Error(err);
    }
  }
}
