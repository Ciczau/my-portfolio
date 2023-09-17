import { useState } from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceItems } from 'components/experience';

import * as S from './index.styles';

const AboutSection = () => {
    const [targetItem, setTargetItem] = useState<number>(-1);

    const { scrollYProgress } = useViewportScroll();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const scale = useTransform(scrollYProgress, [0, 0.3], [1.3, 1]);

    const handleMouse = (index: number, type: boolean) => {
        if (type) {
            setTargetItem(index);
        } else {
            setTargetItem(-1);
        }
    };

    const renderExperience = () => {
        return (
            <S.ExperienceWrapper ref={ref}>
                {experienceItems.map((exp, index) => {
                    return (
                        <S.ExperienceContainer
                            onMouseEnter={() => handleMouse(index, true)}
                            onMouseLeave={() => handleMouse(index, false)}
                            key={index}
                        >
                            <S.IconContainer>
                                <S.IconWrapper
                                    animate={exp.animate}
                                    hover={targetItem === index ? true : false}
                                >
                                    {exp.icon}
                                </S.IconWrapper>
                            </S.IconContainer>
                            {targetItem === index && (
                                <S.Description>{exp.description}</S.Description>
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
