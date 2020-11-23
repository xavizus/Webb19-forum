import PostListProvider from "../contexts/postList";

function MyApp({ Component, pageProps }) {
  return (
      <PostListProvider>
        <Component {...pageProps} />
      </PostListProvider>
      )
}

export default MyApp
