import Header from 'components/Header';
import * as S from './index.styles';
import React, { useEffect, useState } from 'react';
import AboutSection from 'containers/AboutSection';
import ProjectsSection from 'containers/ProjectsSection';
import ContactSection from 'containers/ContactSection';
import HomeSection from 'containers/HomeSection';

const LandingPage = () => {
    const [width, setWidth] = useState<number>();
    const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const [pointer, setPointer] = useState<boolean>(false);
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
        console.log(data);
    };
    return (
        <S.Wrapper>
            {width > 767 && (
                <>
                    <Header pointer={getPointer} />
                    <S.CursorCircle
                        animate={{ x: mousePos.x, y: mousePos.y }}
                        pointer={pointer}
                    >
                        <S.CursorInsideCircle pointer={pointer} />
                    </S.CursorCircle>
                </>
            )}
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </S.Wrapper>
    );
};

export default LandingPage;
