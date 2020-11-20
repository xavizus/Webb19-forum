import CountriesProvider from "../contexts/countries";

function MyApp({ Component, pageProps }) {
  return (
      <CountriesProvider>
        <Component {...pageProps} />
      </CountriesProvider>
      )
}

export default MyApp
