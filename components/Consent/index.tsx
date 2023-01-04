import type { QueryRoot } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { clsx } from "clsx";
import { getCookie, setCookie, hasCookie } from "cookies-next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import styles from "./index.module.css";

type ConsentSettings = {
  [index: string]: "denied" | "granted";
};

type Props = {
  className?: ReactNode;
  data?: PartialDeep<QueryRoot, { recurseIntoArrays: true }> | null;
};

const cookieOptions = { maxAge: 60 * 60 * 24 * 365 };

const defaultConsentSettings: ConsentSettings = {
  ad_storage: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "denied",
};

export const Component: FC<Props> = ({ className, data }) => {
  const [dismiss, setDismiss] = useState(true);

  useEffect(() => {
    setDismiss(hasCookie("consentSettings"));
  }, []);

  const acceptAllConsents = () => {
    const newConsentSettings: ConsentSettings = {
      ad_storage: "granted",
      analytics_storage: "granted",
      functionality_storage: "granted",
      personalization_storage: "granted",
      security_storage: "granted",
    };

    setDismiss(true);

    setCookie("consentSettings", newConsentSettings, cookieOptions);

    gtag("consent", "update", newConsentSettings);

    console.log("granting all consents");
  };

  const closeP = () => {
    setDismiss(true);
    console.log("closing");
  };

  const denyAllConsents = () => {
    const newConsentSettings = defaultConsentSettings;

    setDismiss(true);

    setCookie("consentSettings", newConsentSettings, cookieOptions);

    console.log("denying all consents");
  };

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

  if (dismiss === true) {
    return null;
  }

  return (
    <div className={clsx(className, styles.root, dismiss && "hidden")}>
      <button
        className={clsx("btn", "btn-ghost", styles.closeButton)}
        onClick={(e) => {
          closeP();
        }}
      >
        <RiCloseLine
          aria-hidden="true"
          className={clsx("icon")}
          title="Close banner"
        />
        <span className={clsx("sr-only")}>Close banner</span>
      </button>
      <div className={clsx(styles.about)}>
        <Image
          alt={`${data?.shop?.name} logo`}
          className={clsx(styles.logoImage, "dark:invert")}
          height={40}
          src="/images/logos/logotype.svg"
          width={180}
        />
        <p>
          We use some essential cookies to make this service work.
          <br />
          We’d also like to use analytics cookies so we can understand how you
          use the service and make improvements.
        </p>
      </div>
      <div className={clsx("collapse", styles.information)}>
        <input className={clsx(styles.toggle)} type="checkbox" />
        <div className="collapse-title">
          {/* <button
          onClick={(e) => manageConsents()}
          className={clsx("btn", "btn-info")}
        > */}
          Manage consent settings
          {/* </button> */}
        </div>
        <div className={clsx("overflow-x-auto", "collapse-content")}>
          <table className={clsx("table", "table-compact", "w-full")}>
            <thead>
              <tr>
                <th>Consent Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="form-control w-full pr-12">
                    <label className="cursor-pointer label">
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
              </tr>
              <tr>
                <td>
                  <div className="form-control w-full pr-12">
                    <label className="cursor-pointer label">
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
                  <div className="form-control w-full pr-12">
                    <label className="cursor-pointer label">
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
                  Enables storage that supports the functionality of the website
                  or app such as language settings
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-control w-full pr-12">
                    <label className="cursor-pointer label">
                      <code className="label-text">
                        personalization_storage
                      </code>
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
                  <div className="form-control w-full pr-12">
                    <label className="cursor-pointer label">
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
      </div>
      <div className={clsx("btn-group", styles.buttonGroup)}>
        <button
          onClick={(e) => denyAllConsents()}
          className={clsx("btn", "btn-secondary")}
        >
          Deny all
        </button>
        <button
          onClick={() => {
            acceptAllConsents();
          }}
          className={clsx("btn", "btn-primary")}
        >
          Accept all
        </button>
      </div>
    </div>
  );
};

export default Component;
