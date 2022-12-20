import { clsx } from "clsx";
import { createRef } from "react";

import Layout from "#/components/Layout";

import styles from "./index.module.css";

export default function Page() {
  const scrollingElement = createRef<HTMLDivElement>();

  return (
    <Layout
      classNameDrawerContent={clsx(
        styles.drawerContent,
        "drawerContentOverflowY"
      )}
      classNameMain={clsx(styles.main)}
      ref={scrollingElement}
      showHeaderAndFooter={true}
    >
      <article className={clsx(styles.article)}>
        <h1 className="service-main-title">Disclaimer</h1>
        <strong>General</strong>
        <br /> The undermentioned is applicable to the webpage of
        www.uncnsrdlabel.com. By using this webpage you agree with the
        disclaimer. <br />
        <br /> <strong>Privacy</strong>
        <br /> You can visit this website without notifying who you are and
        without giving any information about yourself. Although situations may
        occur that we will need more information about you in order to
        communicate with you, to book an order or to register your name. We will
        inform you by all means when we will collect your personal data on
        internet. Collected personal data will not be sold or will be made
        available to third parties. Exceptions can occur only when these data
        are legally required. And at any moment you can request to remove your
        data out of our files. <br />
        <br /> <strong>Exclusion of Liability</strong>
        <br /> All information on this website is meant for personal usage. No
        right or claims can be derived from the information on this website. All
        modifications, changes and typing errors reserved. We do our utmost to
        make the information on this website as accurate and complete as
        possible. www.uncnsrdlabel.com does not accept any responsibility for
        damage in whatever form for using this website or for the incompleteness
        or inaccuracy of the information on this website. <br />
        <br /> <strong>Availability</strong>
        <br /> The information and the recommendations on this website can be
        altered without a preceding warning or notification. We will exert to
        the utmost to make this website available as much as possible, but we do
        not accept any liability for the consequences of the non availability of
        this website. <br />
        <br /> <strong>Copyrights and Intellectual Proprietary Rights</strong>
        <br /> The owner of the copyrights of this website is
        www.uncnsrdlabel.com or is owned by third parties which have given
        permission to www.uncnsrdlabel.com form is only allowed after preceding
        permission of www.uncnsrdlabel.com
      </article>
    </Layout>
  );
}
