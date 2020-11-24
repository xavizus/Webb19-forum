import PostListProvider from "../contexts/postList";
import CategoriesProvider from "../contexts/categories";
import '../styles/default.css';
import {colorPalette, StyledBackground, StyledContent} from "../styles/main";
import {ThemeProvider} from "styled-components";
import Navbar from "../components/navbar";
import React from "react";
import Head from 'next/head';
import MeProvider from "../contexts/me";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={colorPalette}>
                <StyledBackground>
                    <MeProvider>
                        <PostListProvider>
                            <CategoriesProvider>
                                {pageProps.auth && <Navbar token={pageProps.token}/>}
                                <Head>
                                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                                          rel="stylesheet"/>
                                </Head>
                                <StyledContent>
                                    <Component {...pageProps} />
                                </StyledContent>
                            </CategoriesProvider>
                        </PostListProvider>
                    </MeProvider>
                </StyledBackground>

        </ThemeProvider>
)}

export default MyApp
