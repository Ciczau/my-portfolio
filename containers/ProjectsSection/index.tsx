import { FaGithub } from 'react-icons/fa';
import { useTransform, useViewportScroll, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import * as S from './index.styles';
const ProjectsSection = ({ pointer }) => {
    const { scrollYProgress } = useViewportScroll();
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
    }> = [
        {
            image: '/wiar.png',
            name: 'WIAR Power',
            description:
                'A simple coaching website, sort of a business card. It facilitates communication with clients and enables them to order services.',
            ghLink: 'https://github.com/Ciczau/WIAR',
        },
        {
            image: '/chat.png',
            name: 'Chattly',
            description:
                'An online chat with the ability to send photos and files, created as a university project.',
            ghLink: 'https://github.com/Ciczau/chattly',
        },
        {
            image: '/mobile.jpg',
            name: 'Powerlifting points calculator',
            description:
                'Simple mobile app which allows to calculate specific points in sport named powerlifting.',
            ghLink: 'https://github.com/Ciczau/WIAR',
        },
    ];
    const handleRedirect = (link: string) => {
        window.open(link, '_blank');
    };

    const cardVariants: Variants = {
        offscreen: {
            y: 100,
        },
        onscreen: {
            y: 20,
            rotate: -10,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 5,
            },
        },
    };
    const vari: Variants = {
        offscreen: {
            y: 330,
        },
        onscreen: {
            y: 30,
            transition: {
                duration: 3.0,
            },
        },
    };
    return (
        <S.Wrapper id="projects" style={{ opacity: inView ? '1' : '0' }}>
            <S.Title>My latest projects</S.Title>
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
        </S.Wrapper>
    );
};

export default ProjectsSection;
