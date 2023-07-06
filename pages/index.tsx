import type { NextPage } from 'next';
import { createGlobalStyle } from 'styled-components';
import MainScreen from 'containers/MainScreen';
import Header from 'components/Header';
import LandingPage from 'containers/LandingPage';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        ::-webkit-scrollbar{
            width: 0;
        }
    }
`

const Home: NextPage = () => {
    return (
        <body>
            <main>
                <GlobalStyle/>
                <LandingPage/>
            </main>
        </body>
    );
};

export default Home;
