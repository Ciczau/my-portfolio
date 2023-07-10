import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import GlobalStyles from 'utils/globalStyles';
import dark from 'theme';
import Head from 'components/Head';
import { GoogleFonts } from 'next-google-fonts';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={dark}>
            <GoogleFonts href="https://fonts.googleapis.com/css2?family=Martian+Mono&family=Poiret+One&display=swap" />
            <GlobalStyles />
            <Head />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
