import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const BackgroundElement = ({ mouseX, mouseY }) => {
    const [visibleLetters, setVisibleLetters] = useState<number>(0);
    const [move, setMove] = useState<boolean>(false);
    const [opacity, setOpacity] = useState<boolean>(false);
    const text = 'FRONT END & BACK END DEVELOPER';
    useEffect(() => {
        const handleScroll = () => {
            const scrollProgress = window.scrollY / window.innerHeight;
            if (
                document.documentElement.scrollHeight -
                    window.innerHeight -
                    window.scrollY -
                    300 >
                0
            ) {
                const distanceBetween =
                    (window.innerHeight * 0.4) / text.length;
                const letters = Math.floor(window.scrollY / distanceBetween);
                const check: boolean = letters > text.length * 1.7;
                setMove(check);
                setOpacity(check);
                setVisibleLetters(letters);
            } else {
                const val =
                    document.documentElement.scrollHeight -
                    window.innerHeight -
                    window.scrollY;
                const distanceBetween = 300 / text.length;
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
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                position: 'fixed',
                width: '100%',
                justifyContent: 'center',
                fontSize: '3.5vw',
                bottom: move ? '50px' : '70vh',
                opacity: opacity ? '0.2' : '0.7',
                transition: 'opacity 0.3s ease,  bottom 0.5s ease',
                transform: `translate(${mouseX * 0.01}px, ${mouseY * 0.01}px)`,
                zIndex: 0,
            }}
        >
            <div style={{ color: 'grey' }}>&lt;</div>
            <div style={{ color: '#217fb6' }}>div</div>
            <div style={{ color: 'grey' }}>&gt;</div>
            {text.split('').map((letter, index) => {
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
                        style={{ color: 'white' }}
                    >
                        {letter === ' ' ? (
                            <div>&nbsp;</div>
                        ) : (
                            <div>{letter}</div>
                        )}
                    </motion.div>
                );
            })}
            <div style={{ color: 'grey' }}>&lt;/</div>
            <div style={{ color: '#217fb6' }}>div</div>
            <div style={{ color: 'grey' }}>&gt;</div>
        </div>
    );
};

export default BackgroundElement;
