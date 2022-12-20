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
        <h1 className="service-main-title">Cookie Policy</h1>
        <div className="service-rte">
          <div className="service-box" id="s1">
            <h3>Why do we use cookies?</h3>
            <p>
              UNCNSRD utilizes cookies and other tracking technologies to
              guarantee you the full functionality of the website; to customize
              your user experience; to perform analytics; and deliver
              personalized advertising on our websites across the Internet and
              social media platforms.
            </p>
          </div>
          <div className="service-box" id="s2">
            <h3>What is a cookie?</h3>
            <p>
              A &ldquo;cookie&ldquo; is a small text file that is downloaded
              onto your devices such as a computer or smartphone when you access
              our websites. We use cookies and other similar technologies in
              order to make our website work efficiently and to secure and
              improve personalized user experience.
            </p>
            <p>
              <u>Different kind of cookies can be utilized:</u>
              <br /> - necessary cookies; analytics; first- and third-party
              cookies, tracking pixels and plug-ins, marketing cookies, etc
            </p>
            <p>
              All cookies have a publisher who tells you who the cookie belongs
              to. The publisher is the owner of the domain specified in the
              cookie. Whenever you visit our website, we place cookies onto your
              device for different reasons. Such cookies are called
              &ldquo;first-party&ldquo; cookies, whereas cookies set by a
              third-party company, such as a social media platforms or ad
              network/ad-tech providers, are called &ldquo;third-party&ldquo;
              cookies.
            </p>
            <p>
              Below you will find more specific information about our cookies
              and the reasons for using them.
            </p>
          </div>
          <div className="service-box" id="s3">
            <h3>How to withdraw your cookie consent?</h3>
            <p>
              Please consider that you can disable all your non-essential cookie
              by withdrawing your consent at any time.
            </p>
            <p>
              You can manage your cookie consent in{" "}
              <b>
                <u>
                  <a className="optanon-toggle-display">Cookie Settings here</a>
                </u>
              </b>
              .
            </p>
            <p>
              In addition to your consent withdrawal, you can easily stop your
              browser from accepting cookies by configuring your browser’s
              cookie settings.
            </p>
            <p>
              Please do consider that if you choose to disable cookies, you may
              encounter limitations on functionality and a less optimal user
              experience.
            </p>
          </div>
          <div className="service-box" id="s4">
            <h3>What types of cookies do we use and why?</h3>
            <h3>Necessary Cookies</h3>
            <p>
              Necessary cookies help make a website usable by enabling basic
              functions like page navigation and access to secure areas of the
              website. The website cannot function properly without these
              cookies.
            </p>
            <table width="100%">
              <tbody>
                <tr>
                  <th>Cookie Name</th>
                  <th>Expiry</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>_pay_session</td>
                  <td>Session</td>
                  <td>
                    This cookie is used in conjunction with the payment window -
                    The cookie is necessary for making secure transactions on
                    the website.
                  </td>
                </tr>
                <tr>
                  <td>_shopify_d</td>
                  <td>Session</td>
                  <td>
                    The cookie is necessary for the secure checkout and payment
                    function on the web site. This function is provided by
                    shopify.com.
                  </td>
                </tr>
                <tr>
                  <td>cart</td>
                  <td>13 days</td>
                  <td>
                    Necessary for the shopping cart functionality on the
                    website.
                  </td>
                </tr>
                <tr>
                  <td>cart_currency</td>
                  <td>13 days</td>
                  <td>
                    The cookie is necessary for the secure checkout and payment
                    function on the web site. This function is provided by
                    shopify.com.
                  </td>
                </tr>
                <tr>
                  <td>cart_sig</td>
                  <td>13 days</td>
                  <td>
                    The cookie is necessary for the secure checkout and payment
                    function on the web site. This function is provided by
                    shopify.com.
                  </td>
                </tr>
                <tr>
                  <td>cart_ts</td>
                  <td>13 days</td>
                  <td>
                    The cookie is necessary for the secure checkout and payment
                    function on the web site. This function is provided by
                    shopify.com.
                  </td>
                </tr>
                <tr>
                  <td>cart_ver</td>
                  <td>13 days</td>
                  <td>
                    Necessary for the shopping cart functionality on the
                    website.
                  </td>
                </tr>
                <tr>
                  <td>CONSENT</td>
                  <td>5922 days</td>
                  <td>
                    Used to detect if the visitor has accepted the marketing
                    category in the cookie banner. This cookie is necessary for
                    GDPR-compliance of the website.
                  </td>
                </tr>
                <tr>
                  <td>cookietest</td>
                  <td>Session</td>
                  <td>
                    This cookie is used to determine if the visitor has accepted
                    the cookie consent box.
                  </td>
                </tr>
                <tr>
                  <td>img/image-l.gif</td>
                  <td>Session</td>
                  <td>
                    Provides the website owner with user reports based on the
                    transaction process on the website – These reports serve to
                    detect if someone is trying to attack the website integrity,
                    but can also be used to provide insights in to why and when
                    users drop out of the potential purchase.
                  </td>
                </tr>
                <tr>
                  <td>JSESSIONID</td>
                  <td>Session</td>
                  <td>Preserves users states across page requests.</td>
                </tr>
                <tr>
                  <td>lastRskxRun</td>
                  <td>2 years</td>
                  <td>
                    Provides the website owner with user reports based on the
                    transaction process on the website – These reports serve to
                    detect if someone is trying to attack the website integrity,
                    but can also be used to provide insights in to why and when
                    users drop out of the potential purchase.
                  </td>
                </tr>
                <tr>
                  <td>lastRskxRun</td>
                  <td>Persistent</td>
                  <td>
                    Provides the website owner with user reports based on the
                    transaction process on the website – These reports serve to
                    detect if someone is trying to attack the website integrity,
                    but can also be used to provide insights in to why and when
                    users drop out of the potential purchase.
                  </td>
                </tr>
                <tr>
                  <td>OptanonConsent</td>
                  <td>1 year</td>
                  <td>
                    Determines whether the visitor has accepted the cookie
                    consent box. This ensures that the coo ie consent box will
                    not be presented again up on re-entry.
                  </td>
                </tr>
                <tr>
                  <td>rCookie</td>
                  <td>2 years</td>
                  <td>
                    Used in order to detect spam and improve the website&apos;s
                    security. Does not store visitor specific data.
                  </td>
                </tr>
                <tr>
                  <td>rskxRunCookie</td>
                  <td>2 years</td>
                  <td>
                    Provides the website owner with user reports based on the
                    transaction process on the website – These reports serve to
                    detect if someone is trying to attack the website integrity,
                    but can also be used to provide insights in to why and when
                    users drop out of the potential purchase.
                  </td>
                </tr>
                <tr>
                  <td>rskxRunCookie</td>
                  <td>Persistent</td>
                  <td>
                    This cookie is used in conjunction with the payment window -
                    The cookie is necessary for making secure transactions on
                    the website.
                  </td>
                </tr>
                <tr>
                  <td>secure_customer_sig</td>
                  <td>1 year</td>
                  <td>
                    This cookie is used to store customer credentials securely
                    when processing a purchase on the web site - the cookie is
                    essential in making a secure online transaction.
                  </td>
                </tr>
                <tr>
                  <td>shopify_pay_redirect</td>
                  <td>1 day</td>
                  <td>
                    The cookie is necessary for the secure checkout and payment
                    function on the web site. This function is provided by
                    shopify.com.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="service-box" id="s5">
            <h3>Preferences Cookies</h3>
            <p>
              Preference cookies enable a website to remember information that
              changes the way the website behaves or looks, like your preferred
              language or the region that you are in.
            </p>
            <table width="100%">
              <tbody>
                <tr>
                  <th>Cookie Name</th>
                  <th>Expiry</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>_shopify_country</td>
                  <td>1 day</td>
                  <td>
                    This cookie is used to determine the preferred country
                    setting selected by the visitor.
                  </td>
                </tr>
                <tr>
                  <td>KL_FORMS_MODAL</td>
                  <td>1 year</td>
                  <td>
                    Determines whether the user has made any subscriptions on
                    the website, so that the website does not show subscription
                    forms to the user, which already have been filled out.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="service-box" id="s6">
            <h3>Statistics Cookies</h3>
            <p>
              Statistic cookies help website owners to understand how visitors
              interact with websites by collecting and reporting information
              anonymously.
            </p>
            <table width="100%">
              <tbody>
                <tr>
                  <th>Cookie Name</th>
                  <th>Expiry</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>__kla_id</td>
                  <td>2 years</td>
                  <td>
                    This cookie is used to collect information on the
                    visitor&apos;s behavior. This information will be stored for
                    inter nal use on the website — internal analytics is used to
                    optimize the websites or to register if the visitor has
                    subscribed to a newsletter.
                  </td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>2 years</td>
                  <td>
                    Registers a unique ID that is used to generate statistical
                    data on how the visitor uses the website.
                  </td>
                </tr>
                <tr>
                  <td>_gat</td>
                  <td>1 day</td>
                  <td>Used by Google Analytics to throttle request rate.</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>1 day</td>
                  <td>
                    Registers a unique ID that is used to generate statistical
                    data on how the visitor uses the website.
                  </td>
                </tr>
                <tr>
                  <td>_hjAbsoluteSessionInProgress</td>
                  <td>1 day</td>
                  <td>
                    This cookie is used to count how many times a website has
                    been visited by different visitors - this is done by
                    assigning the visitor an ID, so the visitor does not get
                    registered twice.
                  </td>
                </tr>
                <tr>
                  <td>_hjFirstSeen</td>
                  <td>1 day</td>
                  <td>
                    This cookie is used to determine if the visitor has visited
                    the website before, or if it is a new visitor on the
                    website.
                  </td>
                </tr>
                <tr>
                  <td>_hjid</td>
                  <td>1 year</td>
                  <td>
                    Sets a unique ID for the session. This allows the website to
                    obtain data on visitor behaviour for statistical purposes.
                  </td>
                </tr>
                <tr>
                  <td>_hjid</td>
                  <td>Persistent</td>
                  <td>
                    Sets a unique ID for the session. This allows the website to
                    obtain data on visitor behaviour for statistical purposes.
                  </td>
                </tr>
                <tr>
                  <td>_hjIncludedInPageviewSample</td>
                  <td>1 day</td>
                  <td>
                    Used to detect whether the user navigation and interactions
                    are included in the website&apos;s data analytics.
                  </td>
                </tr>
                <tr>
                  <td>_hjIncludedInSessionSample</td>
                  <td>1 day</td>
                  <td>
                    Registers data on visitors&apos; website-behaviour. This is
                    used for internal analysis and website optimization.
                  </td>
                </tr>
                <tr>
                  <td>_hjTLDTest/td&gt;</td>
                  <td>Session</td>
                  <td>
                    Registers statistical data on users&apos; behaviour on the
                    website. Used for internal analytics by the website op
                    erator.
                  </td>
                </tr>
                <tr>
                  <td>collect</td>
                  <td>Session</td>
                  <td>
                    Used to send data to Google Analytics about the
                    visitor&apos;s device and behavior. Tracks the visitor
                    across devices and marketing channels.
                  </td>
                </tr>
                <tr>
                  <td>History.store</td>
                  <td>Session</td>
                  <td>
                    Contains an visitor ID - This is used to track
                    visitors&apos; navigation and interaction on the website for
                    internal website-optimization.
                  </td>
                </tr>
                <tr>
                  <td>rCookie</td>
                  <td>Persistent</td>
                  <td>
                    Registers statistical data on users&apos; behaviour on the
                    website. Used for internal analytics by the website
                    operator.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="service-box" id="s7">
            <h3>Marketing Cookies</h3>
            <p>
              Marketing cookies are used to track visitors across websites. The
              intention is to display ads that are relevant and engaging for the
              individual user and thereby more valuable for publishers and third
              party advertisers.
            </p>
            <table width="100%">
              <tbody>
                <tr>
                  <th>Cookie Name</th>
                  <th>Expiry</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>__kla_viewed</td>
                  <td>Persistent</td>
                  <td>
                    Collects information on the user&apos;s website navigation
                    and preferences - This is used to target potential
                    newsletter based upon this information.
                  </td>
                </tr>
                <tr>
                  <td>_fbp</td>
                  <td>3 months</td>
                  <td>
                    Used by Facebook to deliver a series of advertisement
                    products such as real time bidding from third party
                    advertisers.
                  </td>
                </tr>
                <tr>
                  <td>_landing_page</td>
                  <td>13 days</td>
                  <td>
                    Stores visitors&apos; navigation by registering landing
                    pages - This allows the website to present relevant products
                    and/or measure their advertisement efficiency on other
                    websites.
                  </td>
                </tr>
                <tr>
                  <td>_orig_referrer</td>
                  <td>13 days</td>
                  <td>
                    This cookie is used to collect information on a visitor.
                    This information will become an ID string with information
                    on a specific visitor — ID information strings can be used
                    to target groups with similar preferences, or can be used by
                    third-party domains or ad-exchanges.
                  </td>
                </tr>
                <tr>
                  <td>_s</td>
                  <td>1 day</td>
                  <td>
                    Collects data on user behaviour and interaction in order to
                    optimize the website and make advertisement on the website
                    more relevant.
                  </td>
                </tr>
                <tr>
                  <td>_shopify_evids</td>
                  <td>Session</td>
                  <td>
                    Contains data on the content of the shopping cart. This data
                    is used for marketing purposes by promoting related products
                    or for retargeting purposes.
                  </td>
                </tr>
                <tr>
                  <td>_shopify_s</td>
                  <td>1 day</td>
                  <td>
                    Collects data on user behaviour and interaction in order to
                    optimize the website and make advertisement on the website
                    more relevant.
                  </td>
                </tr>
                <tr>
                  <td>_shopify_sa_p</td>
                  <td>1 day</td>
                  <td>
                    Collects data on visitors&apos; behaviour and interaction -
                    This is used to make advertisement on the website more
                    relevant. The cookie also allows the website to detect any
                    referrals from other websites.
                  </td>
                </tr>
                <tr>
                  <td>_shopify_sa_t</td>
                  <td>1 day</td>
                  <td>
                    Collects data on visitors&apos; behaviour and interaction -
                    This is used to make advertisement on the website more
                    relevant. The cookie also allows the website to detect any
                    referrals from other websites.
                  </td>
                </tr>
                <tr>
                  <td>_shopify_y</td>
                  <td>1 year</td>
                  <td>
                    Collects data on user behaviour and interaction in order to
                    optimize the website and make advertisement on the website
                    more relevant.
                  </td>
                </tr>
                <tr>
                  <td>_y</td>
                  <td>1 year</td>
                  <td>
                    Collects data on user behaviour and interaction in order to
                    optimize the website and make advertisement on the website
                    more relevant.
                  </td>
                </tr>
                <tr>
                  <td>ads/ga-audiences</td>
                  <td>Session</td>
                  <td>
                    Used by Google AdWords to re-engage visitors that are likely
                    to convert to customers based on the visitor&apos;s online
                    behaviour across websites.
                  </td>
                </tr>
                <tr>
                  <td>popup</td>
                  <td>1 day</td>
                  <td>
                    Used in context with pop-up advertisement-content on the
                    website. The cookie determines which ads the visitor should
                    be shown, as well as ensuring that the same ads does not get
                    shown more than intended.
                  </td>
                </tr>
                <tr>
                  <td>tr</td>
                  <td>Session</td>
                  <td>
                    Used by Facebook to deliver a series of advertisement
                    products such as real time bidding from third party
                    advertisers.
                  </td>
                </tr>
                <tr>
                  <td>tt_appInfo</td>
                  <td>Session</td>
                  <td>
                    Used by the social networking service, TikTok, for tracking
                    the use of embedded services.
                  </td>
                </tr>
                <tr>
                  <td>tt_sessionId</td>
                  <td>Session</td>
                  <td>
                    Used by the social networking service, TikTok, for tracking
                    the use of embedded services.
                  </td>
                </tr>
                <tr>
                  <td>VISITOR_INFO1_LIVE</td>
                  <td>180 days</td>
                  <td>
                    Tries to estimate the users&apos; bandwidth on pages with
                    integrated YouTube videos.
                  </td>
                </tr>
                <tr>
                  <td>YSC</td>
                  <td>Session</td>
                  <td>
                    Registers a unique ID to keep statistics of what videos from
                    YouTube the user has seen.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="service-box" id="s8">
            <h3>Unclassified Cookies</h3>
            <p>
              Unclassified cookies are cookies that we are in the process of
              classifying, together with the providers of individual cookies.
            </p>
            <table width="100%">
              <tbody>
                <tr>
                  <th>Cookie Name</th>
                  <th>Expiry</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>_ipgeolocation_geolocation</td>
                  <td>Session</td>
                  <td>Unclassified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </Layout>
  );
}
