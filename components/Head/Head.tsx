import React from 'react';
import Head from 'next/head';

const CustomHead = () => {
    return (
        <Head>
            <title>title</title>
            <meta name="description" content="content" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default CustomHead;
