import Head from 'next/head'
import ProtectedRoute from "../components/protectedRoute";
import {HomeCenteredBox, P} from "../styles/home.styled";

function Home() {

    return (
        <div>
            <Head>
                <title>Webb19 Forum</title>
            </Head>
                <HomeCenteredBox>
                    <h1>Welcome to Infinity-chan. Speak freely - legally.!</h1>
                    <P>On Infinity-chan, you can create your own post for free with no experience or programming knowledge needed.</P>
                </HomeCenteredBox>
        </div>

)
}

export default ProtectedRoute(Home);
