import React, { useRef, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import * as S from './index.styles';

const HomeSection = () => {
    const title: string = "Hi, I'm Wiktor";
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
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex' }}
            >
                {Array.from(title).map((el, index) => {
                    return (
                        <S.Title key={index}>
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
                        </S.Title>
                    );
                })}
            </motion.div>
        );
    };
    return (
        <S.Wrapper id="home" style={{ scale }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {renderTitle()}
            </div>
        </S.Wrapper>
    );
};

export default HomeSection;
