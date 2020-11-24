import Head from 'next/head'
import ProtectedRoute from "../components/protectedRoute";
import Link from "next/link";

function Home() {

    return (
        <div>
            <Head>
                <title>Webb19 Forum</title>
            </Head>
            <div>
                <h1>Welcome to Infinity-chan!</h1>
                <Link href={'/posts'}>Check the forum posts here!</Link>
            </div>
        </div>

)
}

export default ProtectedRoute(Home);
