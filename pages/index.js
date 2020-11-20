import Head from 'next/head'
import ProtectedRoute from "../components/protectedRoute";

function Home() {

  return (
    <div>
      <Head>
        <title>Webb19 Forum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

export default ProtectedRoute(Home);
