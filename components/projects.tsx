export const projects: Array<{
    image: string;
    name: string;
    description: string;
    ghLink: string;
    pageLink?: string;
}> = [
    {
        image: '/twitter.png',
        name: 'Twitter clon',
        description:
            'The Next.js Twitter Clone is a cutting-edge social media application designed to mimic the popular Twitter platform.',
        ghLink: 'https://github.com/Ciczau/twitter-app',
        pageLink: 'https://twitter-app-one.vercel.app',
    },
    {
        image: '/chat.png',
        name: 'Chattly',
        description:
            'An online chat with the ability to send photos and files, created as a university project.',
        ghLink: 'https://github.com/Ciczau/chattly',
    },
    {
        image: '/lawsite.png',
        name: 'Scheller Law',
        description:
            'A landing page as a business card for a lawyer and real estate agent.',
        ghLink: 'https://github.com/Ciczau/law-site',
        pageLink: 'https://schellerlaw.vercel.app',
    },
    {
        image: '/wiar.png',
        name: 'WIAR Power',
        description:
            'A simple coaching website, sort of a business card. It facilitates communication with clients and enables them to order services.',
        ghLink: 'https://github.com/Ciczau/WIAR',
    },
];
