import React, { useEffect, useState } from 'react';
import * as S from './index.styles';
import Link from 'next/link';
const menuItems: Array<{ name: string; url: string }> = [
    {
        name: 'Home',
        url: 'home',
    },
    {
        name: 'About',
        url: 'about',
    },
    {
        name: 'Projects',
        url: 'projects',
    },
    {
        name: 'Contact',
        url: 'contact',
    },
];
const Header = ({ pointer }) => {
    const [visible, setVisible] = useState<string>('about');
    const [viewPercentage, setViewPercentage] = useState<number>(0);
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            const percentage =
                window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight);
            setViewPercentage(percentage);
            menuItems.forEach((el) => {
                const element = document.getElementById(el.url);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const windowHeight =
                        window.innerHeight ||
                        document.documentElement.clientHeight;
                    const elementHeight = element.offsetHeight;
                    const visibleThreshold = elementHeight * 0.7;
                    const isVisible =
                        rect.top <= windowHeight - visibleThreshold &&
                        rect.bottom >= visibleThreshold;
                    if (isVisible) {
                        setVisible(el.url);
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const renderMenuElements = () => {
        return (
            <>
                {menuItems.map((element, index) => {
                    return (
                        <S.MenuElement
                            key={index}
                            onClick={() => handleScroll(element.url)}
                            style={{
                                fontWeight: visible === element.url && 'bold',
                            }}
                            onMouseEnter={() => pointer(true)}
                            onMouseLeave={() => pointer(false)}
                        >
                            {element.name}
                        </S.MenuElement>
                    );
                })}
            </>
        );
    };
    return (
        <S.Wrapper>
            <S.Menu>
                <S.MenuLine percentage={viewPercentage} />
                <S.MenuItems>{renderMenuElements()}</S.MenuItems>
            </S.Menu>
        </S.Wrapper>
    );
};

export default Header;
