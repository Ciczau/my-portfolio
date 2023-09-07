import React from 'react';
import Head from 'next/head';

const CustomHead = () => {
    return (
        <Head>
            <title>Wiktor Michalski</title>
            <meta
                name="description"
                content="Full-stack developer specialized in TypeScript, React and Node.js"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default CustomHead;
