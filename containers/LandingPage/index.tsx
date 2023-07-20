import Header from 'components/Header';
import * as S from './index.styles';
import React, { useEffect, useState } from 'react';
import AboutSection from 'containers/AboutSection';
import ProjectsSection from 'containers/ProjectsSection';
import ContactSection from 'containers/ContactSection';
import HomeSection from 'containers/HomeSection';
import { motion } from 'framer-motion';
import BackgroundElement from 'components/BackgroundElement';
const LandingPage = () => {
    const [width, setWidth] = useState<number>();
    const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const [pointer, setPointer] = useState<boolean>(false);
    const [visibleLetters, setVisibleLetters] = useState<number>(0);
    useEffect(() => {
        const handleMouse = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouse);
        return () => {
            window.removeEventListener('mousemove', handleMouse);
        };
    });
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    const getPointer = (data: boolean) => {
        setPointer(data);
    };
    return (
        <S.Wrapper>
            <BackgroundElement mouseX={mousePos.x} mouseY={mousePos.y} />
            {width > 767 && (
                <>
                    <Header pointer={getPointer} />
                    <S.CursorCircle
                        animate={{ x: mousePos.x, y: mousePos.y }}
                        pointer={pointer ? 'true' : 'false'}
                    >
                        <S.CursorInsideCircle pointer={pointer} />
                    </S.CursorCircle>
                </>
            )}
            <HomeSection />
            <AboutSection />
            <ProjectsSection pointer={getPointer} />
            <ContactSection pointer={getPointer} />
        </S.Wrapper>
    );
};

export default LandingPage;
