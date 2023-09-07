import { FaGithub } from 'react-icons/fa';
import { useTransform, useViewportScroll, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import * as S from './index.styles';
import { useRouter } from 'next/dist/client/router';
const ProjectsSection = ({ pointer }) => {
    const { scrollYProgress } = useViewportScroll();

    const router = useRouter();
    const [ref, inView] = useInView({
        threshold: 0.15,
        triggerOnce: true,
    });
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
    const Projects: Array<{
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
            image: '/wiar.png',
            name: 'WIAR Power',
            description:
                'A simple coaching website, sort of a business card. It facilitates communication with clients and enables them to order services.',
            ghLink: 'https://github.com/Ciczau/WIAR',
        },
    ];
    const handleRedirect = (link: string) => {
        window.open(link, '_blank');
    };
    const redirectToPage = (link: string) => {
        if (link) {
            router.push(link);
        }
    };
    const renderProjects = () => {
        return (
            <S.ProjectsContainer ref={ref}>
                {Projects.map((project, index) => {
                    return (
                        <S.ProjectElement
                            style={{
                                scale,
                                background: `linear-gradient(
                            0deg,
                            rgba(0, 0, 0, 1) 20%,
                            rgba(0, 0, 0, 0.3138686131386861) 51%,
                            rgba(0, 0, 0, 1) 97%
                        ),url(${project.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                            }}
                            onClick={() => redirectToPage(project.pageLink)}
                            key={index}
                        >
                            <S.ProjectTitle>{project.name}</S.ProjectTitle>
                            <S.ProjectDesc>
                                <S.ProjectInfo>
                                    <div
                                        onMouseEnter={() => (pointer = true)}
                                        onMouseLeave={() => (pointer = false)}
                                        style={{
                                            width: '6%',
                                        }}
                                    >
                                        <FaGithub
                                            size="100%"
                                            onClick={() =>
                                                handleRedirect(project.ghLink)
                                            }
                                        />
                                    </div>
                                    <div style={{ width: '80%' }}>
                                        {project.description}
                                    </div>
                                </S.ProjectInfo>
                            </S.ProjectDesc>
                        </S.ProjectElement>
                    );
                })}
            </S.ProjectsContainer>
        );
    };
    return (
        <S.Wrapper id="projects" style={{ opacity: inView ? '1' : '0' }}>
            <S.Title>My latest projects</S.Title>
            {renderProjects()}
        </S.Wrapper>
    );
};

export default ProjectsSection;
