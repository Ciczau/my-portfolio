import { useState } from 'react';
import { FaReact, FaNodeJs, FaMobileAlt, FaLessThan } from 'react-icons/fa';
import { useTransform, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import * as S from './index.styles';
const AboutSection = () => {
    const [mouseEnter, setMouseEnter] = useState<Array<boolean>>([
        false,
        false,
        false,
        false,
    ]);
    const { scrollYProgress } = useViewportScroll();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const scale = useTransform(scrollYProgress, [0, 0.3], [1.3, 1]);
    const experienceItems: Array<{
        icon: React.ReactNode;
        description: string;
        animate: boolean;
    }> = [
        {
            icon: (
                <FaReact
                    color={mouseEnter[0] ? '#ffffff39' : 'white'}
                    size="100%"
                    style={{ transition: 'all 0.3s ease' }}
                />
            ),
            description:
                'I have gained extensive experience working with React and Next.js.',
            animate: true,
        },
        {
            icon: (
                <FaNodeJs
                    color={mouseEnter[1] ? '#ffffff39' : 'white'}
                    size="100%"
                />
            ),
            description:
                'I have extensive experience utilizing Node.js for backend development, enabling me to create scalable and efficient server-side applications.',
            animate: false,
        },
        {
            icon: (
                <FaMobileAlt
                    color={mouseEnter[2] ? '#ffffff39' : 'white'}
                    size="100%"
                />
            ),
            description:
                'I have a strong expertise in utilizing React Native for mobile app development.',
            animate: false,
        },
        {
            icon: (
                <div style={{ display: 'flex' }}>
                    <FaLessThan
                        color={mouseEnter[3] ? '#ffffff39' : 'white'}
                        size="100%"
                        style={{ margin: '5px' }}
                    />
                    <FaLessThan
                        color={mouseEnter[3] ? '#ffffff39' : 'white'}
                        size="100%"
                        style={{ transform: 'rotate(180deg)', margin: '5px' }}
                    />
                </div>
            ),
            description:
                'I have extensive experience with styled-components and framer-motion, creating visually appealing UI components and implementing smooth animations.',
            animate: false,
        },
    ];
    const handleMouse = (index: number, type: boolean) => {
        let tab = [...mouseEnter];
        tab[index] = type;
        setMouseEnter(tab);
    };

    const renderExperience = () => {
        return (
            <S.ExperienceWrapper ref={ref}>
                {experienceItems.map((exp, index) => {
                    return (
                        <S.ExperienceContainer
                            onMouseEnter={() => handleMouse(index, true)}
                            onMouseLeave={() => handleMouse(index, false)}
                            animate={mouseEnter[index]}
                            key={index}
                        >
                            <div
                                style={{
                                    transform: mouseEnter[index]
                                        ? 'scale(0.2)'
                                        : 'none',
                                    transition: 'all 0.3s ease-in-out',
                                }}
                            >
                                {' '}
                                <S.IconWrapper animate={exp.animate}>
                                    {exp.icon}
                                </S.IconWrapper>
                            </div>
                            {mouseEnter[index] && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        width: '250px',
                                        fontSize: '1.6rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    {exp.description}
                                </div>
                            )}
                        </S.ExperienceContainer>
                    );
                })}
            </S.ExperienceWrapper>
        );
    };
    return (
        <S.Wrapper id="about" style={{ scale, opacity: inView ? '1' : '0' }}>
            {renderExperience()}
        </S.Wrapper>
    );
};

export default AboutSection;
