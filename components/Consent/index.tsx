import type { QueryRoot } from "@shopify/hydrogen-react/storefront-api-types";
import type { FC, ReactNode } from "react";
import type { PartialDeep } from "type-fest";

import { clsx } from "clsx";
import { setCookie, hasCookie } from "cookies-next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import ConsentTable from "#/components/ConsentTable";
import Modal from "#/components/Modal";

import { cookieOptions, defaultConsentSettings } from "#/lib/constants/consent";

import styles from "./index.module.css";

type ConsentSettings = {
  [index: string]: "denied" | "granted";
};

type Props = {
  className?: string;
  data?: PartialDeep<QueryRoot, { recurseIntoArrays: true }> | null;
  route?: string;
  view: "banner" | "page";
};

export const Component: FC<Props> = ({ className, data, route, view }) => {
  // const [dismiss, setDismiss] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => setDialogOpen((bool) => !bool);
  const closeDialog = () => setDialogOpen(false);

  useEffect(() => {
    if (hasCookie("consentSettings") !== true) {
      setDialogOpen(true);
    }
  }, []);

  const acceptAllConsents = () => {
    const newConsentSettings: ConsentSettings = {
      ad_storage: "granted",
      analytics_storage: "granted",
      functionality_storage: "granted",
      personalization_storage: "granted",
      security_storage: "granted",
    };

    setDialogOpen(false);

    setCookie("consentSettings", newConsentSettings, cookieOptions);

    gtag("consent", "update", newConsentSettings);

    console.log("granting all consents");
  };

  const closeP = () => {
    setDialogOpen(false);

    console.log("closing");
  };

  const denyAllConsents = () => {
    const newConsentSettings = defaultConsentSettings;

    setDialogOpen(false);

    setCookie("consentSettings", newConsentSettings, cookieOptions);

    console.log("denying all consents");
  };

  if (route && ["/", "/consent"].includes(route)) {
    return null;
  }

  // if (dialogOpen === false) {
  //   return null;
  // }

  return (
    <Modal
      className={clsx(className, styles.root)}
      closeOnOutsideClick
      onRequestClose={closeDialog}
      open={dialogOpen}
    >
      <Image
        alt={`${data?.shop?.name} logo`}
        className={clsx(styles.logo, "dark:invert")}
        height={40}
        src="/images/logos/logotype.svg"
        width={180}
      />
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
      <div className={clsx("collapse", styles.information)}>
        <div className={clsx(styles.about)}>
          <p>We use some essential cookies to make this service work.</p>
          <p>
            We’d also like to use analytics cookies so we can understand how you
            use the service and make improvements.
          </p>
        </div>

        <div className={clsx("collapse", styles.manage)}>
          <input className={clsx(styles.toggle)} type="checkbox" />
          <div className="collapse-title link underline-offset-4">
            Manage consent settings
          </div>
          <div className={clsx(styles.tableContainer, "collapse-content")}>
            <ConsentTable className={clsx(styles.table, "w-full")} />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "col-span-full",
          "btn-group",
          "gap-4",
          styles.buttonGroup
        )}
      >
        <button
          onClick={() => {
            acceptAllConsents();
          }}
          className={clsx("btn", "btn-primary")}
        >
          Accept all
        </button>
        <button
          onClick={(e) => denyAllConsents()}
          className={clsx("btn", "btn-outline", "btn-secondary")}
        >
          Deny all
        </button>
      </div>
    </Modal>
  );
};

export default Component;
