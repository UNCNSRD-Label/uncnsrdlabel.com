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
        <h1 className="service-main-title">Privacy Policy</h1>

        <p>Last Updated: 1 January 2022</p>

        <h2 className="servicesidebar">1. Scope</h2>
        <p>
          UNCNSRD, (INSERT ADDRESS), Sydney.{" "}
          <a href="mailto:info@uncnsrdlabel.com">info@uncnsrdlabel.com</a>,
          (&ldquo;UNCNSRD&ldquo;, &ldquo;uncnsrdlabel.com&ldquo;,
          &ldquo;us&ldquo;, &ldquo;we&ldquo; and &ldquo;our&ldquo;), maintains
          the website www.uncnsrdlabel.com and any related mobile apps
          (collectively the “Site”) and is the seller and your contractual
          partner when you make transactions, e.g. buy products, though the
          Site. By using the Site, you (&ldquo;your&ldquo;, &ldquo;user&ldquo;,
          &ldquo;users&ldquo;, &ldquo;buyer&ldquo;, &ldquo;buyers&ldquo;,
          &ldquo;customer&ldquo; and &ldquo;customers&ldquo;) accept and agree
          to be bound by these Terms of Service (&ldquo;Terms&ldquo;) and the
          entire Agreement (see Section 2 below). Please read it carefully.
        </p>
        <p>
          These Terms supersedes all previous representations, understandings or
          agreements provided by UNCNSRD All products or services and
          information displayed by UNCNSRD constitute an &ldquo;invitation to
          offer&ldquo;. Your order of purchases constitutes your
          &ldquo;offer&ldquo;, which shall be subject to the Terms. UNCNSRD
          reserves the right to accept or deny your offer for any reason at any
          time.
        </p>

        <h2 className="servicesidebar">2. Definitions</h2>
        <ul>
          <li>
            &ldquo;Agreement&ldquo; means these Terms as well as the{" "}
            <a href="https://uk.uncnsrdlabel.com/pages/privacy-policy">
              Privacy Policy
            </a>
            ,{" "}
            <a href="https://uk.uncnsrdlabel.com/pages/warranty-and-returns-agreement">
              the Warranty and Returns Agreement
            </a>{" "}
            and all Information Sheets (e.g., our Shipping Information),
            schedules, annexes and appendices to any of them. It includes all
            future amendments, replacements and variations.{" "}
          </li>
          <li>&ldquo;Cart&ldquo; is defined in Section 4.2.</li>
          <li>&ldquo;EEA&ldquo; means the European Economic Area.</li>
          <li>&ldquo;EU&ldquo; means the European Union.</li>
          <li>
            &ldquo;UNCNSRD&ldquo; &ldquo;uncnsrdlabel.com&ldquo;,
            &ldquo;us&ldquo;, &ldquo;we&ldquo; and &ldquo;our&ldquo; all mean
            UNCNSRD, and refer to your contracting party, when you use the Site.
            For purposes of these Terms, they also include all our affiliates
            which provide users the ability to purchase products listed on the
            Site.
          </li>
          <li>&ldquo;Order Confirmation&ldquo; is defined in Section 4.5.</li>
          <li>&ldquo;Payment Information&ldquo; is defined in Section 4.3.</li>
          <li>
            &ldquo;Product&ldquo; or &ldquo;products&ldquo; include any goods,
            products, merchandise, services, offers or display items that are
            displayed on the Site by its Vendors, as well as the related
            description, information, warranties, delivery schedule or
            procedure.
          </li>
          <li>
            &ldquo;Site&ldquo; means the website www.uncnsrdlabel.com and any
            related mobile apps.
          </li>
          <li>“Submissions is defined in Section 9.4. </li>
          <li>
            &ldquo;Terms&ldquo; means these Terms of Service, which are part of
            the Agreement.
          </li>
          <li>&ldquo;UK&ldquo; means the United Kingdom.</li>
          <li>
            &ldquo;Vendor&ldquo;, &ldquo;seller&ldquo; or
            &ldquo;affiliate&ldquo; describes any person or legal entity that
            offers products for purchase on the Site.
          </li>
        </ul>

        <h2 className="servicesidebar">3. Electronic Communication</h2>
        <p>
          <span className="terms-number">3.1</span> When you visit the Site or
          transmit emails to us, it is understood that you are communicating
          electronically with UNCNSRD As a result, you are thus giving your
          consent to receive electronic communications from UNCNSRD, and that
          our representatives may communicate with you by email or within the
          Site.
        </p>
        <p>
          <span className="terms-number">3.2</span> By purchasing products via
          our Site, you expressively understand, acknowledge and agree to be
          bound and to abide by the Agreement in force at the time that you
          place your order. This applies whether or not you are a registered
          UNCNSRD user.{" "}
        </p>
        <p>
          <span className="terms-number">3.3</span> You are only authorized to
          make a purchase through our Site if you agree to abide by all
          applicable laws and to this Agreement. In addition to these Terms, you
          may want to read our Privacy Policy at any time for more information
          about how we collect, store, and protect your personal data when you
          make a purchase, and our Warranty and Returns Agreement for more
          information about your rights as a consumer.
        </p>

        <h2 className="servicesidebar">
          4. Formation of contract and Order Process
        </h2>
        <p>
          <span className="terms-number">4.1</span>The information displayed on
          the Site only constitutes an invitation to make an offer rather than a
          binding offer to sell products. Consequently, when you place an order
          via our Site you submit an offer to us to buy the product(s) in your
          order.{" "}
        </p>

        <p>
          <span className="terms-number">4.2</span>If you wish to buy products
          displayed on the Site, you can add it to your digital shopping cart
          (&ldquo;Cart&ldquo;). To process the order and make the payment, you
          must follow the steps of the purchase process, indicating or verifying
          the information requested in each step. Furthermore, throughout the
          purchase process, before payment, you can modify the details of your
          order, and you may be asked to log into your account or to register
          with us, to enter a shipping address, select a payment method and
          shipping option.
        </p>

        <p>
          <span className="terms-number">4.3</span>You may use any payment
          method that is listed on our payment information page (&ldquo;
          <a href="https://uk.uncnsrdlabel.com/pages/payments">
            Payment Information
          </a>
          &ldquo;); we will not charge any fees for using any of these payment
          methods but you are responsible for any costs associated with money
          transactions potentially charged by the payment services providers. No
          other payment methods can be used to effect payment. Depending on the
          method chosen, you may need to enter further details and may be led to
          the website of the payment provider in order to be identified as an
          authorized user before you can place your order. We reserve the right
          not to accept certain payment methods for a given order and to refer
          to other payment methods.
        </p>

        <p>
          <span className="terms-number">4.4</span>Once you have finished
          entering the required information, including the payment method, you
          can place an order by clicking the “buy now” button, submitting a
          binding offer to us to buy (all) the product(s) in your Cart. If you
          are a registered user, a record of all the orders placed by you is
          available in the &ldquo;My Account&ldquo; area of the Site or Apps. If
          you detect an error in your order after completion of the payment
          process, you should immediately contact us to try and correct the
          error.
        </p>

        <p>
          <span className="terms-number">4.5</span>We will send you a message to
          the email address you provided at checkout, confirming receipt of your
          order and containing the details of your order (“Order Confirmation”).
          The Order Confirmation is acknowledgement that we have received your
          order and does not confirm acceptance of your offer to buy the
          product(s) ordered.{" "}
        </p>

        <p>
          <span className="terms-number">4.6</span>UNCNSRD reserves the right to
          reject or modify any order, whether or not such order has been
          confirmed and/or your credit card or other payment method has been
          charged. You will be notified of any rejection of your order at the
          email address you provided at checkout. If your credit card or other
          payment method has already been charged and any portion of your order
          is rejected, we will issue a credit to your payment method for the
          corresponding amount.{" "}
        </p>

        <p>
          <span className="terms-number">4.7</span>Acceptance of your order and
          completion of the purchase contract between us will take place when we
          dispatch the product(s) to you. After the purchase contract is
          concluded, you will receive a shipping confirmation email to the email
          address you provided at check out. The terms of the Agreement apply to
          each such purchase contract.
        </p>

        <h2 className="servicesidebar">
          5. Promotional vouchers and their redemption
        </h2>
        <p>
          <span className="terms-number">5.1</span>Promotional vouchers are
          vouchers that cannot be purchased but are given out during advertising
          campaigns and are valid for a certain period of time.
        </p>

        <p>
          <span className="terms-number">5.2</span>Promotional vouchers can be
          redeemed once only in connection with an order, and only within the
          specified period. Certain styles may be excluded from the promotion.
          Promotional vouchers may not be used to purchase gift vouchers. Please
          note that a minimum order value may apply to the use of promotional
          vouchers.
        </p>

        <p>
          <span className="terms-number">5.3</span>Promotional vouchers will not
          be refunded if all or some of the products are returned.
        </p>

        <p>
          <span className="terms-number">5.4</span>Promotional vouchers can only
          be redeemed before the ordering process is complete. It is not
          possible to apply vouchers retrospectively. Promotional vouchers may
          not be transferred to third parties. Unless we have agreed otherwise,
          it is not possible to combine multiple promotional vouchers.
        </p>

        <p>
          <span className="terms-number">5.5</span>If you used a promotional
          voucher when making your purchase and, as a result of revocation by
          you, the total value of your order is less than or equal to the
          (minimum) value of the promotional voucher, we reserve the right to
          charge you the original price for the product(s) you retain.
        </p>

        <h2 className="servicesidebar">
          6. Product Availability and Description
        </h2>
        <p>
          <span className="terms-number">6.1</span>We try to be as specific as
          possible on the Site about products, including product availability,
          size, colour, type, quantity of stock available and product
          description. However, while we try our best to ensure that the product
          information on the Site is correct, typographical errors or
          inaccuracies may occur. Therefore, we reserve the right to correct any
          errors, inaccuracies or omissions and the right to change and update
          information at any time without prior notice (including after you have
          submitted an order). Please note that the information provided about
          products on the Site is for information purposes only. Please make
          sure you read all labels, warnings and directions provided with the
          product before use.
        </p>

        <p>
          <span className="terms-number">6.2</span>Please note that the colours
          of the products you will see on the Site depend on your
          monitor/screen. We cannot guarantee that the display of colours will
          be accurate and colours may vary.{" "}
        </p>

        <p>
          <span className="terms-number">6.3</span>If you have ordered a product
          that is unavailable, we will immediately notify you by email and
          provide you with an estimated date of when the product is due to be
          back in stock and available for dispatch. (Please note: some items may
          not return in stock and dates are subject to change). Alternatively,
          you will be entitled to cancel your order and receive a corresponding
          refund from us (if your payment method has already been charged).
        </p>

        <h2 className="servicesidebar">7. Delivery; Title and risk of loss</h2>
        <p>
          <span className="terms-number">7.1</span>Unless agreed otherwise,
          shipping will be made to the delivery address indicated by you. Please
          see our{" "}
          <a href="https://uk.uncnsrdlabel.com/pages/shipping">
            Shipping Information
          </a>{" "}
          for delivery costs by destination and item type, and for expected
          delivery times. We aim to deliver your ordered products by the
          estimated date set out in the shipping confirmation email (see Section
          4.7), or, if no date is given, within 30 days of the date of the
          shipping confirmation email. In the event that delivery is delayed for
          any reason within our control, we will do our best to keep you
          informed about the estimated new delivery date. Please note that if
          the product(s) is/are not delivered within 30 days of the shipping
          confirmation email, you are entitled to cancel the order and be
          refunded the full amount paid for the order.
        </p>

        <p>
          <span className="terms-number">7.2</span>If you are a consumer
          residing in the EEA/UK, and subject to Section 7.3 below, title to and
          risk of damage or loss of, products pass to you upon delivery of your
          order. If you are not a consumer residing in the EEA/UK, title and
          risk pass to you upon dispatch of your order to the carrier.
        </p>

        <p>
          <span className="terms-number">7.3</span>Title in all ordered and/or
          delivered products remains vested in UNCNSRD until the full purchase
          price has been received by UNCNSRD
        </p>

        <h2 className="servicesidebar">
          8. Price of Products and Delivery Charges
        </h2>
        <p>
          <span className="terms-number">8.1</span>The prices of the products
          will be as quoted on the Site at the time you submit your order. We
          take all reasonable care to ensure the prices of products are correct
          at the time when the relevant information is entered onto the site.
          Prices for our products may change from time to time, but changes will
          not affect any order you have already placed. The price of a product
          includes VAT (where applicable). However, if the rate of VAT changes
          between the date of your order and the date of delivery. We will
          adjust the VAT you pay, unless you have already paid for the products
          in full before the change in VAT takes effect.
        </p>

        <p>
          <span className="terms-number">8.2</span>The price of a product does
          not include delivery charges. Our delivery charges are as advised to
          you during the check-out process, before you confirm your order. To
          check relevant delivery charges, please refer to our{" "}
          <a href="https://uk.uncnsrdlabel.com/pages/shipping">
            Shipping Information
          </a>{" "}
          page. The total cost of the order is the price of the products ordered
          and the delivery charge. We also inform you about the delivery charge
          before you place an order.
        </p>

        <p>
          <span className="terms-number">8.3</span>The Site contains a variety
          of products. It is always possible that, despite our reasonable
          efforts, errors may occur in the display of prices . In the event that
          an error occurred regarding the price of a product you have ordered,
          we will inform you of this error and we will give you the option of
          continuing to purchase the product at the correct price or cancelling
          your order. The order shall be on hold until we have received your
          instructions. If we are unable to contact you using the contact
          details you provided during the order process, we will treat the order
          as cancelled and notify you in writing. Please note that if the
          pricing error is obvious and unmistakable and could have reasonably
          been recognised by you as mis-priced, we may, at our discretion,
          immediately cancel your order and notify you of such cancellation.
        </p>

        <h2 className="servicesidebar">
          9. Creation and Termination of Accounts
        </h2>
        <p>
          By creating an account through our Site, you confirm that the
          information you provide is true. We reserve the right to refuse any of
          our services and to terminate your account and any Agreement with you
          at any time and without notice if we determine you have provided false
          or misleading information or have violated or abused any terms of this
          Agreement, or are in breach of applicable laws.
        </p>

        <h2 className="servicesidebar">10. Intellectual Property Rights</h2>
        <p>
          <span className="terms-number">10.1</span>All intellectual property
          rights, such as trademarks and copyrights in items on the Site remain
          with UNCNSRD and/or its subsidiaries or licensors. The Site and its
          content (including but not limited to logos, organization, graphics,
          design, compilation, magnetic translation, digital conversion and
          other matters related to the Site) may not be used, including copying
          or storing in whole or in part, communication to the public or
          distribution without the express written permission and/or license of
          UNCNSRD
        </p>

        <p>
          <span className="terms-number">10.2</span>UNCNSRD grants users a
          limited license to access its Site. This does not include the right to
          download (other than the page caching) or modify the Site or any
          portion of it, except if UNCNSRD provides express written consent for
          such an action. This license does not include any re-sale or
          commercial use of the Site or its contents; any collection and use of
          any product listings, images, descriptions or prices; any derivative
          use of the Site or its contents; any downloading or copying of account
          information for benefit of another merchant; or any use of data
          mining, bots or similar data gathering and extraction tools. The Site
          or any portion of it may not be re-produced, duplicated, sold,
          re-sold, copied, visited or otherwise exploited for any commercial or
          non-commercial purpose without our express written consent. You may
          not frame or use any framing techniques to enclose any of the
          trademark, logo or any proprietary information (including page layout,
          images, text or form) of UNCNSRD or our affiliates without express
          written consent. You may not use any meta tags or any other
          &ldquo;hidden text&ldquo; UNCNSRD’s name or our trademarks without
          UNCNSRD’s express written consent. Any unauthorised use terminates the
          permission or license granted by UNCNSRD Subject to the next sentence,
          you are granted a limited, non-exclusive, and revocable right to
          create any hyperlink to the uncnsrdlabel.com homepage as long as the
          link does not portray the services or products of UNCNSRD or its
          affiliates in a false, derogatory, misleading, or otherwise offensive
          matter, or as you having the right of ownership of the same in any
          form, or for inclusion in any context that is illegal, offensive, or
          otherwise harmful to our business interest; as otherwise contrary to
          Section 12 below. You may not use our trademark, or any UNCNSRD logo
          or other proprietary graphic as part of a hyperlink without express
          written consent and our acceptance, and by this limited license we do
          not warrant or represent in any way that any use of such license does
          not violate a third party’s rights.{" "}
        </p>

        <p>
          <span className="terms-number">10.3</span>As we ask others to respect
          our intellectual property rights, we respect the intellectual property
          rights of others. If you believe that material located on the Site or
          linked to by UNCNSRD violates your intellectual property rights, you
          are encouraged to send an email to{" "}
          <a href="mailto:info@uncnsrdlabel.com">info@uncnsrdlabel.com</a>.
        </p>

        <h2 className="servicesidebar">
          11. Warranty and Returns; Right of Withdrawal
        </h2>
        <p>
          <span className="terms-number">11.1</span>If you are a consumer
          residing in the EEA or the UK, statutory provisions shall apply for
          your right of withdrawal, warranty claims and returns.{" "}
        </p>

        <p>
          <span className="terms-number">11.2</span>If you are a consumer
          residing outside the EEA or the UK, mandatory local consumer
          protection provisions shall apply for your right of withdrawal,
          warranty claims and returns.{" "}
        </p>

        <p>
          <span className="terms-number">11.3</span>For further information on
          clauses 11.1 and 11.2 please refer to our{" "}
          <a href="https://uk.uncnsrdlabel.com/pages/warranty-and-returns-agreement">
            Warranty and Returns Agreement
          </a>
          , which is part of this Agreement.
        </p>

        <h2 className="servicesidebar">12. Limitation of Liability</h2>
        <p>
          <span className="terms-number">12.1</span>Subject to any applicable
          mandatory statutory provisions, including, but not limited, to the
          consumer rights referred to in our{" "}
          <a href="https://uk.uncnsrdlabel.com/pages/warranty-and-returns-agreement">
            Warranty and Returns Agreement
          </a>
          , and provisions pursuant to EU Directive 85/374/EC or applicable
          national laws concerning liability for defective products, all content
          displayed on the Site is provided without any guarantees, conditions,
          or warranties as to its accuracy.{" "}
        </p>

        <p>
          <span className="terms-number">12.2</span>Unless expressly stated to
          the contrary, and to the fullest extent permitted by law, UNCNSRD and
          its suppliers, content providers and advertisers hereby expressly
          exclude all conditions, warranties and other terms which might
          otherwise be implied by statute, common law or the law and shall not
          be liable for any damages.{" "}
        </p>

        <p>
          <span className="terms-number">12.3</span>If you are a consumer
          residing in Germany, clause 12.2 reads as follows: Unless expressly
          stated to the contrary, and to the fullest extent permitted by law,
          UNCNSRD and its suppliers, content providers and advertisers hereby
          expressly exclude all conditions, warranties and other terms which
          might otherwise be implied by statute, common law or the law and shall
          not be liable for any damages. This does not include claims for
          damages arising from injury to life, body, health or from the breach
          of essential contractual obligations and liability for other damages
          based on an intentional or grossly negligent breach of duty by
          UNCNSRD, its legal representatives, employees or vicarious agents.
          Essential contractual obligations are those which need to be fulfilled
          to achieve the purpose of the contract. In the event of a breach of
          essential contractual obligations, UNCNSRD shall only be liable for
          the foreseeable damage typical for the type of contract if such damage
          was caused by simple negligence, unless the claims are based on injury
          to life, body or health.{" "}
        </p>

        <p>
          <span className="terms-number">12.4</span>The limitation of liability
          shall also apply in favour of our legal representatives, employees and
          vicarious agents if claims are asserted directly against them.
        </p>

        <h2 className="servicesidebar">13. Linking to this site</h2>
        <p>
          You may link to our Site, provided you do so in a way that is fair and
          legal and does not damage our reputation or take advantage of it, but
          you must not establish a link in a way that falsely suggest any form
          of association, approval, or endorsement on our part. You must not
          establish a link from any website that is not owned by you. The Site
          including its content, must not be framed on any other website and/or
          app, nor may you create a link to any part of this Site or the linked
          webpages other than the main page. We reserve the right to withdraw
          linking permission without notice.
        </p>

        <h2 className="servicesidebar">14. Indemnity</h2>
        <p>
          <span className="terms-number">14.1</span>You agree to indemnify,
          defend and hold harmless to the fullest extent permitted by law
          UNCNSRD and any of its affiliates, suppliers, licensors and partners,
          and its directors, officers, employees, consultant and agents from any
          and all third party claims, liabilities, damages and/or costs
          (including but not limited to legal fees) arising from or related to
          your use of the Site or breach of the Agreement.
        </p>

        <p>
          <span className="terms-number">14.2</span>We will notify you promptly
          of any such claim and will provide you (at your expense) with
          reasonable assistance in defending the claim. We reserve the right,
          without this affecting your indemnification obligations, to assume the
          exclusive defense of any claims directed at us. In that event, and if
          required, you will provide all assistance, documents, declarations or
          other support reasonably required by us.
        </p>

        <h2 className="servicesidebar">15. Variation</h2>
        <p>
          UNCNSRD shall have the right in its absolute discretion at any time
          and without notice to amend, remove or vary the services and/or any
          page of the Site.
        </p>

        <h2 className="servicesidebar">16. Severability</h2>
        <p>
          If any part of the Terms or the entire Agreement is unenforceable
          (including any provision in which we exclude our liability to you) the
          enforceability of any other part of the Terms or the entire Agreement
          will not be affected. The remaining clauses shall remain in full force
          and effect. Where possible, any clause/sub-clause or part of a
          clause/sub-clause can be severed to render the remaining part valid,
          the clause shall be interpreted accordingly. Alternatively, you agree
          that the clause shall be rectified and interpreted in such a way that
          closely resembles the original meaning of the clause/sub-clause as is
          permitted by law.
        </p>

        <h2 className="servicesidebar">17. Complaints; Dispute Resolution</h2>
        <p>
          <span className="terms-number">17.1</span>We operate a complaints
          handling procedure which we will use to try to resolve disputes when
          they first arise. Please let us know if you have any complaints or
          comments.
        </p>

        <p>
          <span className="terms-number">17.2</span>For residents in the EEA,
          the European Commission provides for an online dispute resolution
          platform, which you can access here:
          https://ec.europa.eu/consumers/odr. We are neither obliged nor willing
          to participate in dispute resolution proceedings before a consumer
          arbitration board.
        </p>

        <h2 className="servicesidebar">18. No Waiver</h2>
        <p>
          No waiver of any term of this Agreement shall be deemed a further or
          continuing waiver of such term or any other term. Our failure to
          assert any right or provision under the Agreement shall not constitute
          a waiver of such right or provision.
        </p>

        <h2 className="servicesidebar">19. Assignment</h2>
        <p>
          You may not assign or transfer these Terms or the Agreement (or any of
          your rights or obligations under the Terms or the Agreement) without
          our prior written consent. Any attempted assignment or transfer
          without complying with the foregoing will be void. We may freely
          assign or transfer these Terms or the Agreement by giving you
          respective notice. The Terms or Agreement then inures to the benefit
          of and is binding upon you and the assignee.
        </p>

        <h2 className="servicesidebar">20. Governing Law and Jurisdiction</h2>
        <p>
          <span className="terms-number">20.1</span>These Terms and the entire
          Agreement is governed by and construed in accordance with the laws of
          The Netherlands, and the application of the United Nations Convention
          of Contracts for the International Sale of Goods is expressly
          excluded. If you are a consumer residing in the EEA or UK, the
          application of mandatory legal provisions of the country of your
          habitual residence shall remain unaffected by this choice of law.{" "}
        </p>

        <p>
          <span className="terms-number">20.2</span>In the event of any dispute
          or claim associated with these Terms or the entire Agreement, that
          dispute or claim shall be subject to the exclusive jurisdiction of the
          Dutch courts. If you are a consumer residing in the EEA or UK, your
          right to bring a claim in the country of your habitual residence shall
          remain unaffected. Please also see Section 16.2 above for the online
          dispute resolution platform provided by the European Commission.
        </p>

        <h2 className="servicesidebar">21. Entire Agreement</h2>
        <p>
          The Agreement (including these Terms) shall constitute the entire and
          only agreement between you and us concerning the use of the Site and
          any transaction through it and supersede any and all preceding and
          contemporaneous agreements between you and us.
        </p>

        <h2 className="servicesidebar">
          22. Updates and Amendments to this Agreement
        </h2>
        <p>
          <span className="terms-number">22.1</span>Subject to the conditions of
          applicable law, UNCNSRD reserves the right to modify this Agreement at
          any time without your prior consent. UNCNSRD shall, however, inform
          its customers of changes to the Agreement. Your continued use of the
          Site constitutes your acceptance of the Agreement with all such
          changes. It is your responsibility to periodically check the Site for
          any possible changes to the Agreement.
        </p>

        <p>
          <span className="terms-number">22.2</span>Additionally, UNCNSRD may
          post additional terms, conditions, rules or requirements related to
          the Site or any of the services provided on it. At its sole
          discretion, UNCNSRD may also provide other services governed by
          different terms of service.
        </p>

        <p>
          <span className="terms-number">22.3</span>The Agreements in effect at
          the time of your use of the Site or purchase of products through the
          Site, no matter if you have previously entered into Agreements with us
          on other (previous) terns.
        </p>

        <h2 className="servicesidebar">23. Contact Information</h2>
        <p>
          Questions about these Terms or the entire Agreement should be sent to
          us at <a href="mailto:info@uncnsrdlabel.com">info@uncnsrdlabel.com</a>
          .
        </p>
      </article>
    </Layout>
  );
}
