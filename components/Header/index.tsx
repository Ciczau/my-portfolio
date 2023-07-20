import React, { useEffect, useState } from 'react';
import * as S from './index.styles';
import Link from 'next/link';

const Header = ({ pointer }) => {
    const MenuItems: Array<{ name: string; url: string }> = [
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
    const [visible, setVisible] = useState<string>('about');
    const [viewPercentage, setViewPercentage] = useState<number>(0);
    const handleScroll = (id: string) => {
        var element = document.getElementById(id);
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
            MenuItems.forEach((el) => {
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
    return (
        <S.Wrapper>
            <S.Menu>
                <S.MenuLine percentage={viewPercentage} />
                <S.MenuItems>
                    {MenuItems.map((element, index) => {
                        return (
                            <S.MenuElement
                                key={index}
                                onClick={() => handleScroll(element.url)}
                                style={{
                                    fontWeight:
                                        visible === element.url && 'bold',
                                }}
                                onMouseEnter={() => pointer(true)}
                                onMouseLeave={() => pointer(false)}
                            >
                                {element.name}
                            </S.MenuElement>
                        );
                    })}
                </S.MenuItems>
            </S.Menu>
        </S.Wrapper>
    );
};

export default Header;
