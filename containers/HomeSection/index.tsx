import React, { useRef } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import * as S from './index.styles';

const title: string = "Hi, I'm Wiktor";

const HomeSection = () => {
    const constraintsRefs = useRef<
        Array<React.RefObject<HTMLDivElement> | null>
    >(Array.from(title).map(() => React.createRef()));

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [2, -1]);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.03,
                staggerChildren: 0.03,
            },
        },
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };
    const renderTitle = () => {
        return (
            <S.TitleWrapper
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {Array.from(title).map((el, index) => {
                    return (
                        <S.Letter key={index}>
                            <motion.div
                                ref={constraintsRefs.current[index]}
                                drag
                                variants={item}
                            >
                                {el === ' ' ? (
                                    <div>&nbsp;</div>
                                ) : (
                                    <div>{el}</div>
                                )}
                            </motion.div>
                        </S.Letter>
                    );
                })}
            </S.TitleWrapper>
        );
    };
    return (
        <S.Wrapper id="home" style={{ scale }}>
            {renderTitle()}
        </S.Wrapper>
    );
};

export default HomeSection;
