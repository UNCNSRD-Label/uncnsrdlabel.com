import { NextApiRequest, NextApiResponse } from "next";
import fetch from "cross-fetch";

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  if (!req.body.email) {
    return res.status(400).json({ data: 'Email address not found' })
  }

  const url = (process.env.KLAVIYO_URL ?? "{KLAVIYO_URL}")
    .replace("LIST_ID", process.env.KLAVIYO_LIST_ID ?? "{KLAVIYO_LIST_ID}")
    .replace(
      "PRIVATE_KEY",
      process.env.KLAVIYO_PRIVATE_KEY ?? "{KLAVIYO_PRIVATE_KEY}"
    );

  const profiles = [req.body];

  const body = JSON.stringify({
    profiles,
  });

  try {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body,
    };

    const response = await fetch(url, options);

    res.json({ status: response.status, statusText: response.statusText });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send("Error");
  }
}
