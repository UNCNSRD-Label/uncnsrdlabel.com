import '../styles/global/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
    <script
      async type="text/javascript"
      src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=Rb5sXk"
    ></script>

    {/* <script>
      var _learnq = _learnq || [];
      _learnq.push(['identify', {
        // Change the line below to dynamically print the user's email.
        '$email': '{{ email }}'
      }]);
    </script> */}
  </>
}

export default MyApp
