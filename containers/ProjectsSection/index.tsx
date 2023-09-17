import { useTransform, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/dist/client/router';

import { projects } from 'components/projects';

import * as S from './index.styles';

const ProjectsSection = ({ pointer }) => {
    const { scrollYProgress } = useViewportScroll();

    const router = useRouter();
    const [ref, inView] = useInView({
        threshold: 0.15,
        triggerOnce: true,
    });
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
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
                {projects.map((project, index) => {
                    return (
                        <S.ProjectElement
                            style={{
                                scale,
                            }}
                            image={project.image}
                            onClick={() => redirectToPage(project.pageLink)}
                            key={index}
                        >
                            <S.ProjectTitle>{project.name}</S.ProjectTitle>
                            <S.ProjectDesc>
                                <S.ProjectInfo>
                                    <S.GithubIcon
                                        size="100%"
                                        onClick={() =>
                                            handleRedirect(project.ghLink)
                                        }
                                        onMouseEnter={() => (pointer = true)}
                                        onMouseLeave={() => (pointer = false)}
                                    />

                                    <div>{project.description}</div>
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
