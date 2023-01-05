import type { FC, ReactNode } from "react";

import { clsx } from "clsx";
import { getCookie, setCookie } from "cookies-next";

import { cookieOptions, defaultConsentSettings } from "#/lib/constants/consent";

type Props = {
  className?: string;
};

export const Component: FC<Props> = ({ className }) => {
  const toggleConsent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key: keyof typeof defaultConsentSettings = e.target.getAttribute(
      "name"
    ) as keyof typeof defaultConsentSettings;
    const value = e.target.checked ? "granted" : "denied";

    const existingLocalConsentCookieValue = getCookie("consentSettings");
    console.log({ existingLocalConsentCookieValue });

    let newConsentSettings = defaultConsentSettings;

    if (typeof existingLocalConsentCookieValue === "string") {
      newConsentSettings = JSON.parse(existingLocalConsentCookieValue);
    }

    if (key && value) {
      newConsentSettings[key] = value;

      setCookie("consentSettings", newConsentSettings, cookieOptions);

      gtag("consent", "update", newConsentSettings);
    }
  };

  return (
    <div className={clsx("overflow-x-auto", className)}>
      <table className={clsx("table", "table-compact", "w-full")}>
        <thead>
          <tr>
            <th>Consent Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
                <td>
                  <div className="form-control w-full pr-16">
                    <label className="cursor-pointer label gap-16">
                      <code className="label-text">ad_storage</code>
                      <input
                        type="checkbox"
                        className="toggle"
                        name="ad_storage"
                        onChange={(e) => toggleConsent(e)}
                      />
                    </label>
                  </div>
                </td>
                <td>
                  Enables storage, such as cookies, related to advertising
                </td>
              </tr> */}
          <tr>
            <td>
              <div className="form-control w-full pr-16">
                <label className="cursor-pointer label gap-16">
                  <code className="label-text">analytics_storage</code>
                  <input
                    type="checkbox"
                    className="toggle"
                    name="analytics_storage"
                    onChange={(e) => toggleConsent(e)}
                  />
                </label>
              </div>
            </td>
            <td>
              Enables storage, such as cookies, related to analytics (for
              example, visit duration)
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-control w-full pr-16">
                <label className="cursor-pointer label gap-16">
                  <code className="label-text">functionality_storage</code>
                  <input
                    type="checkbox"
                    className="toggle"
                    name="functionality_storage"
                    onChange={(e) => toggleConsent(e)}
                  />
                </label>
              </div>
            </td>
            <td>
              Enables storage that supports the functionality of the website or
              app such as language settings
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-control w-full pr-16">
                <label className="cursor-pointer label gap-16">
                  <code className="label-text">personalization_storage</code>
                  <input
                    type="checkbox"
                    className="toggle"
                    name="personalization_storage"
                    onChange={(e) => toggleConsent(e)}
                  />
                </label>
              </div>
            </td>
            <td>
              Enables storage related to personalization such as video
              recommendations
            </td>
          </tr>
          <tr>
            <td>
              <div className="form-control w-full pr-16">
                <label className="cursor-pointer label gap-16">
                  <code className="label-text">security_storage</code>
                  <input
                    type="checkbox"
                    className="toggle"
                    name="security_storage"
                    onChange={(e) => toggleConsent(e)}
                  />
                </label>
              </div>
            </td>
            <td>
              Enables storage related to security such as authentication
              functionality, fraud prevention, and other user protection
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Component;
