'use client';
import type { NextPage } from 'next';
import { createGlobalStyle } from 'styled-components';
import Header from 'components/Header';
import LandingPage from 'containers/LandingPage';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: none;
        ::-webkit-scrollbar{
            width: 0;
        }
        
    }

`;

const Home: NextPage = () => {
    return (
        <>
            <GlobalStyle />
            <LandingPage />
        </>
    );
};

export default Home;
