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
        <h1 className="service-main-title">Terms of Service</h1>
        <div className="service-rte">
          <p>
            This privacy policy applies to all personal data that is collected
            and used by us when you when you visit or use the websites, web
            shops, when you place and order or contact us as well as when you
            purchase our products in our stores or interact with us through
            social media or otherwise. For purposes of this privacy policy,
            ‘personal data’ means any information through which we can identify
            you, as further described below.
          </p>

          <h2 className="servicesidebar">Who we are</h2>
          <p>
            We are UNCNSRD (&ldquo;UNCNSRD&ldquo;, &ldquo;UNCNSRD Retail
            bv.com&ldquo;, &ldquo;us&ldquo;, &ldquo;we&ldquo; and
            &ldquo;our&ldquo;). UNCNSRD is an Amsterdam- based fashion and
            lifestyle brand established in 2022 by Ivy Ta. Lorem ipsum dolor sit
            amet.
          </p>
          <p>
            UNCNSRD, with seat at (INSERT ADDRESS), Sydney with Chamber of
            Commerce number (NUMBER) is responsible for using your personal
            data.
          </p>

          <h2 className="servicesidebar">Personal data we collect</h2>
          <p>
            The information we collect about you when you buy our products or
            use our Services may include the following (jointly referred to as:
            &ldquo;personal data&ldquo;).
          </p>
          <p>
            <u>General:</u>
          </p>
          <ul>
            <li>
              Your contact details. Your name, postal address and other contact
              details, such as your telephone number and e-mail address.
            </li>
            <li>
              Your account data and electronic identification data (including IP
              address, MAC address, geographic area where you are located,
              browser type and version, operating system, referral source,
              length of visit, page views, website navigation paths, as well as
              information about timing, frequency and pattern of your service
              use) and the data you provide to us.
            </li>
            <li>
              Information regarding your use of our online Services. This may
              include data regarding the pages you visit and the content of your
              abandoned shopping cart.
            </li>
            <li>
              Your purchases in our stores and online. The data we collect if
              you purchase a product in one of our stores or online, (such as
              date and amount of the purchase, the product you purchased
              location of the store, the website or app through which you make
              your purchase, payment method, payment status, discount, delivery
              method and delivery address.
            </li>
            <li>
              Your reviews. The comments, experiences, preferences, product
              reviews shared with us online or through social media.
            </li>
            <li>
              Your communication data. Your requests, any complaints you may
              have and any other data that we receive if we communicate with you
              via e-mail, online or via social media.
            </li>
            <li>
              Your job application and work experience, age, school
              qualifications, interests, and other information you provide to us
              when you send us your resume’ or apply for a job opening.
            </li>
          </ul>

          <h2 className="servicesidebar">What we do with your personal data</h2>
          <p>
            UNCNSRD collects and utilizes your personal data for the purposes
            set out below.
          </p>
          <p>
            <u>For the performance of our agreement with you:</u> In order to
            manage and handle your purchases (online and in our stores) and to
            provide you with the Services you requested from us, including
            handling your requests, we use your contact details, your account
            and electronic identification data, information regarding your
            purchases in our stores and online.
          </p>
          <p>
            <u>To comply with a legal obligation to which we are subject:</u>
            The information described above may be used to maintain appropriate
            business records, to comply with lawful requests by public
            authorities and to comply with applicable laws and regulations or as
            otherwise required by law.
          </p>
          <p>
            <u>For our legitimate commercial interests:</u> The usage and
            analytical data (including your IP address, geographical location,
            browser type and version, operating system, referral source, length
            of visit, page views, website navigation paths, as well as
            information about timing, frequency and pattern of your service use)
            may be processed for the purposes of analyzing the use of the
            website and services. We process this information in order to
            monitoring and improving our website and services.
          </p>
          <p>
            The personal data referred to above may also be used by UNCNSRD:
          </p>
          <ul>
            <li>
              to generate aggregated statistics about the users of our products
              and Services;
            </li>
            <li>to assist in security and fraud prevention;</li>
            <li>
              for system security and integrity purposes (preventing hacking,
              cheats, spamming, etc.);
            </li>
            <li>
              to remind you per email of your abandoned cart or send you an
              order confirmation;
            </li>
            <li>
              to facilitate our business operations, to operate company policies
              and procedures;
            </li>
            <li>
              to enable us to merge, sell, acquire, or transfer assets; and
            </li>
            <li>
              for other legitimate business purposes permitted by applicable
              law.
            </li>
          </ul>
          <p>
            Use of information based on your consent: If you choose so and
            consent we will use your contact details to send you marketing
            materials and newsletters. You may opt out of receiving such
            marketing materials at any time by following the instructions in any
            communication you receive from us. You can also control these
            preferences in your profile settings and device. We may also use
            your personal data referred for marketing purposes based on your
            profiles via email, or other electronic means or otherwise, but we
            will only do so after we have received your consent to do so.
          </p>
          <p>
            Please be advised that you can withdraw your consent at any time by
            clicking on the link we provide you with all our communications.
          </p>
          <p>Please do not supply any other person’s personal data to us.</p>

          <h2 className="servicesidebar">Cookies</h2>
          <p>
            We use cookies. These are placed by software that operates on our
            servers, and by software operated by third parties whose services we
            use. When you first visit our website, we ask you whether you wish
            us to use cookies. If you choose not to accept them, we shall not
            use them for your visit except to record that you have not consented
            to their use for any purpose. If you choose not to use cookies or
            you prevent their use through your browser settings, you will not be
            able to use all of the functionalities of our website. Please visit
            our <a href="/pages/cookie-policy">cookie policy</a>.
          </p>

          <h2 className="servicesidebar">How we share your data</h2>
          <p>
            We don’t sell your personal data and we may share your personal data
            with the following parties:
          </p>
          <ul>
            <li>
              Service Providers and Processors: we engage third party vendors,
              agents, service providers, and affiliated entities to provide
              services to us on our behalf, such as support for the internal
              operations of our websites, online stores (including payment
              processors and third parties we use of sending your orders to your
              home address), Services (e.g., technical support processing), as
              well as related offline product support services, data storage and
              other services. Our contracts with these service providers do not
              permit use of your information for their own (marketing) purposes.
            </li>
            <li>
              Affiliated companies: including other companies within UNCNSRD
              Retail BV, joint ventures, franchisees and licensees.
            </li>
            <li>
              Partners: Sometimes we offer you a service or product in
              co-operation with partners. In this case we may also disclose your
              personal data to those partners, but only where you have
              consented.
            </li>
            <li>
              Corporate Transactions: information about our customers, including
              personal data, may be disclosed as part of any merger, sale,
              transfer of our assets, acquisition, bankruptcy, or similar event.
            </li>
            <li>
              With Consent: we may also disclose information about you,
              including personal data to any other third parties, where you have
              consented or requested that we do so.
            </li>
            <li>
              Third parties: provided a legal requirement must be followed. We
              may also disclose your personal data if we believe we are required
              to do so by law, or is reasonably necessary or to respond to
              claims and defend out legal position.
            </li>
            <li>
              Lastly we may share aggregate or de-identified information with
              third parties for research, marketing, analytics and other
              purposes, provided such information does not identify a particular
              individual.
            </li>
          </ul>

          <h2 className="servicesidebar">Social Media</h2>
          <p>
            When taking part to various social media forums like Facebook,
            Twitter, Instagram, Vimeo, etc., you should familiarize yourself
            with the tools provided by those platforms that allow you to make
            choices about how you share the personal data in your social media
            profile(s). We are bound by the privacy practices or policies of
            these third parties, therefore we do recommend you to read the
            applicable privacy policies/notices, terms of use and related
            information about how your personal data is utilized.
          </p>

          <h2 className="servicesidebar">
            International transfers of your personal data
          </h2>
          <p>
            Please be informed that we transfer and process any personal data
            you provide to us to countries other than your country of residence.
            The laws of these countries may not afford the same level of
            protection to your personal data. We will therefore seek to ensure
            that all adequate safeguards are in place and that all applicable
            laws and regulations are complied with in connection with such
            transfer. More in particular for data transferred from the EU to
            countries outside the EU, we utilize the (new) EU Model Clauses.
          </p>

          <h2 className="servicesidebar">Security</h2>
          <p>
            We do take all reasonable steps to ensure that your personal data is
            duly secured, adopting appropriate technical, physical, and
            organizational measures, so that they are protected against
            unauthorized or unlawful use, alteration, unauthorized access or
            disclosure, accidental or wrongful destruction, and loss. Please do
            consider that e-mail is not recognized as a secure medium of
            communication. For this reason, we request that you do not send
            private information to us by email. Some of the information you may
            enter on our website may be transmitted securely via a secure medium
            known as Secure Sockets Layer or SSL. We also use software programs
            to monitor network traffic to identify unauthorized attempts to
            upload or change information, otherwise cause damage. We secure your
            personal information from unauthorized access, use or disclosure.
          </p>

          <h2 className="servicesidebar">
            Data retention: How long do we retain your data
          </h2>
          <p>
            We retain your personal data for as long as required to satisfy the
            purpose for which it was originally collected and used, unless a
            longer period is necessary for our legal obligations (for example
            for tax related reasons) or to defend a legal claim.
          </p>

          <h2 className="servicesidebar">What are your rights</h2>
          <p>You have the following rights concerning your personal data:</p>
          <p>
            <u>Access and correction</u>
          </p>
          <p>
            If you would like to know what personal data we process about you
            and for what purposes, please contact us via our Customer Service or
            at{" "}
            <a href="mailto:info@dailypaperclothing.com">
              info@dailypaperclothing.com
            </a>
            . You can also request to amend or correct your data. If you are
            under 16, such requests should be made by your parent (or legal
            representative). We will respond to your request as soon as
            possible, but no later than four (4) weeks.
          </p>
          <p>
            <u>Objection</u>
          </p>
          <p>
            You may object at any time to the use of personal data for direct
            marketing and/or (further) receipt of (certain) marketing
            information by contacting us at{" "}
            <a href="mailto:info@dailypaperclothing.com">
              info@dailypaperclothing.com
            </a>
            .
          </p>
          <p>
            <u>Removal</u>
          </p>
          <p>
            If you want us to delete your personal data and/or your account, you
            can request this by sending an email to{" "}
            <a href="mailto:info@dailypaperclothing.com">
              info@dailypaperclothing.com
            </a>
            . It is possible that some personal data may be retained by us after
            the deletion request, for example if this is necessary for the
            processing of orders placed or if there is a legal obligation to
            retain the data.
          </p>
          <p>
            <u>Restriction of processing</u>
          </p>
          <p>
            If you have legitimate reasons to request restriction of processing,
            for example because you dispute the accuracy of the personal data
            processed by us or you have objected to the processing of personal
            data by us, you can request this by sending an email to{" "}
            <a href="mailto:info@dailypaperclothing.com">
              info@dailypaperclothing.com
            </a>
            .
          </p>
          <p>
            <u>Data portability</u>
          </p>
          <p>
            If the processing of personal data is based on your consent and is
            performed through automated processes, you have the right to request
            to obtain the relevant personal data you provided to the us in a
            structured, common and machine-readable form. You can request this
            by sending an email to{" "}
            <a href="mailto:info@dailypaperclothing.com">
              info@dailypaperclothing.com
            </a>
            .
          </p>
          <p>
            <u>Withdrawal of consent</u>
          </p>
          <p>
            Where any processing of your personal data is based on your
            (explicit) consent, you have the right to withdraw such consent at
            any time, without prejudice to the lawfulness of the processing
            based on the consent before its withdrawal.
          </p>
          <p>
            <u>Complaint</u>
          </p>
          <p>
            In case you may have a question or complaint about how we process
            your personal data, you can send an email to{" "}
            <a href="mailto:info@dailypaperclothing.com">
              info@dailypaperclothing.com
            </a>
            . Alternatively, you can file a complaint with the Dutch Data
            Protection Authority or with the Data Protection Authority of your
            country of residence
          </p>

          <h2 className="servicesidebar">Other websites</h2>
          <p>
            Our websites and mobile applications contain links to third-party
            websites; if you follow these links, you will exit our websites and
            mobile applications. While these third-party websites are selected
            with care, we cannot accept liability for the use of your personal
            data by these organizations. For more information, please consult
            the privacy statement of the website you are visiting (if such a
            statement is provided).
          </p>

          <h2 className="servicesidebar">Changes to the policy</h2>
          <p>
            We may change this privacy policy from time to time by posting the
            updated version of the privacy policy on our websites and
            applications. We recommend you to visit this page regularly to stay
            informed about possible changes.
          </p>
          <p>Date 23-12-2021</p>
        </div>
      </article>
    </Layout>
  );
}
