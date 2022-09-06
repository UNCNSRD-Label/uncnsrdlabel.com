import '../styles/global/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />

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
