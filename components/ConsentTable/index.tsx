import type { FC } from "react";

import { clsx } from "clsx";
import { getCookie, setCookie } from "cookies-next";
import { useState } from "react";

import { cookieOptions, defaultConsentSettings } from "#/lib/constants/consent";

type Props = {
  className?: string;
};

const fields: Array<{
  name: keyof ConsentSettings;
  description: string;
}> = [
  {
    name: "ad_storage",
    description: "Enables storage, such as cookies, related to advertising",
  },
  {
    name: "analytics_storage",
    description:
      "Enables storage, such as cookies, related to analytics (for example, visit duration)",
  },
  {
    name: "functionality_storage",
    description:
      "Enables storage that supports the functionality of the website or app such as language settings",
  },
  {
    name: "personalization_storage",
    description:
      "Enables storage related to personalization such as video recommendations",
  },
  {
    name: "security_storage",
    description:
      "Enables storage related to security such as authentication functionality, fraud prevention, and other user protection",
  },
];

export const Component: FC<Props> = ({ className }) => {
  const existingLocalConsentCookieValue = getCookie("consentSettings");

  let newConsentSettings: Partial<ConsentSettings> = {};

  if (typeof existingLocalConsentCookieValue === "string") {
    newConsentSettings = JSON.parse(existingLocalConsentCookieValue);
  }

  const [consentSettings, setConsentSettings] = useState(newConsentSettings);

  const toggleConsent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key: keyof ConsentSettings = e.target.getAttribute(
      "name"
    ) as keyof ConsentSettings;

    const value = e.target.checked ? "granted" : "denied";

    let newConsentSettings = { ...consentSettings };

    if (key && value) {
      newConsentSettings[key] = value;
    }
    console.log({ consentSettings, newConsentSettings });
    setConsentSettings(newConsentSettings);

    setCookie("consentSettings", newConsentSettings, cookieOptions);

    gtag("consent", "update", newConsentSettings);
  };

  return (
    <div className={clsx("overflow-x-auto", className)}>
      <table className={clsx("table", "table-compact", "w-full")}>
        <thead>
          <tr>
            <th>Consent Type</th>
            <th>Denied/Granted</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field.name}>
              <td>
                <code className="capitalize">
                  {field.name.replaceAll("_", " ")}
                </code>
              </td>
              <td>
                <div className="form-control w-full pr-16">
                  <label className="cursor-pointer label gap-16">
                    <code className="label-text hidden">{field.name}</code>
                    <input
                      checked={consentSettings[field.name] === "granted"}
                      type="checkbox"
                      className="toggle"
                      name={field.name}
                      onChange={(e) => toggleConsent(e)}
                    />
                  </label>
                </div>
              </td>
              <td>{field.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Component;
