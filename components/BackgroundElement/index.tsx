import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import * as S from './index.styles';

const backgroundText = 'FRONT END & BACK END DEVELOPER';

const BackgroundElement = ({ mouseX, mouseY }) => {
    const [visibleLetters, setVisibleLetters] = useState<number>(0);
    const [move, setMove] = useState<boolean>(false);
    const [opacity, setOpacity] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (
                document.documentElement.scrollHeight -
                    window.innerHeight -
                    window.scrollY -
                    300 >
                0
            ) {
                const distanceBetween =
                    (window.innerHeight * 0.4) / backgroundText.length;
                const letters = Math.floor(window.scrollY / distanceBetween);
                const check: boolean = letters > backgroundText.length * 1.7;
                setMove(check);
                setOpacity(check);
                setVisibleLetters(letters);
            } else {
                const val =
                    document.documentElement.scrollHeight -
                    window.innerHeight -
                    window.scrollY;
                const distanceBetween = 300 / backgroundText.length;
                const letters = Math.floor(val / distanceBetween);
                setOpacity(false);
                setVisibleLetters(letters);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    const renderBackgroundText = () => {
        return (
            <>
                {backgroundText.split('').map((letter, index) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: index < visibleLetters ? 1 : 0,
                                position:
                                    index < visibleLetters
                                        ? 'relative'
                                        : 'absolute',
                            }}
                            key={index}
                        >
                            {letter === ' ' ? (
                                <div>&nbsp;</div>
                            ) : (
                                <div>{letter}</div>
                            )}
                        </motion.div>
                    );
                })}
            </>
        );
    };
    return (
        <S.Wrapper
            move={move}
            opacity={opacity}
            animate={{
                x: mouseX * 0.01,
                y: mouseY * 0.01,
            }}
        >
            <S.TagWrapper>
                <p>&lt;</p>
                <div>div</div>
                <p>&gt;</p>
            </S.TagWrapper>
            {renderBackgroundText()}
            <S.TagWrapper>
                <p>&lt;/</p>
                <div>div</div>
                <p>&gt;</p>
            </S.TagWrapper>
        </S.Wrapper>
    );
};

export default BackgroundElement;
