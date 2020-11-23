import PostListProvider from "../contexts/postList";
import CategoriesProvider from "../contexts/categories";
import '../styles/default.css';
import {colorPalette, StyledBackground} from "../styles/main";
import {ThemeProvider} from "styled-components";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={colorPalette}>
            <StyledBackground>
                <PostListProvider>
                    <CategoriesProvider>
                        <Component {...pageProps} />
                    </CategoriesProvider>
                </PostListProvider>
            </StyledBackground>
        </ThemeProvider>
)}

export default MyApp
