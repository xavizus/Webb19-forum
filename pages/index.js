import Head from 'next/head'
import ProtectedRoute from "../components/protectedRoute";
import Link from "next/link";

function Home({me}) {

  return (
    <div>
      <Head>
        <title>Webb19 Forum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {Object.entries(me).map((value, index) => {
          return <div key={index}>
              <div style={{width: "25%", float: 'left'}}>{value[0]}: </div>
              <div style={{width: "50%"}}>{value[1] || 'Null'}</div>
          </div>
        })}

        <div>
            <h1>Welcome to Infinity-chan!</h1>
            <Link href={'/posts'}>Check the forum posts here!</Link>
        </div>
    </div>
  )
}

export default ProtectedRoute(Home);
