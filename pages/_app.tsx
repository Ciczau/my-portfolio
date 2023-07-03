import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import GlobalStyles from 'utils/globalStyles';
import dark from 'theme';
import Head from 'components/Head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Head />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
