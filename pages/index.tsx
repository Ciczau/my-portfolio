import type { NextPage } from 'next';

import MainScreen from 'containers/MainScreen';

const Home: NextPage = () => {
    return (
        <body>
            <main>
                <MainScreen />
            </main>
        </body>
    );
};

export default Home;
