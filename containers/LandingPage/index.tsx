import Header from "components/Header";
import * as S from './index.styles'
import React from "react";
import AboutSection from "containers/AboutSection";
import ProjectsSection from "containers/ProjectsSection";
import ContactSection from "containers/ContactSection";
import HomeSection from "containers/HomeSection";
import LazyLoad from "components/LazyLoad";
const LandingPage = () => {
    return (
        <S.Wrapper>
            <Header/>
            <LazyLoad>
            <HomeSection/>
            <AboutSection/>
            <ProjectsSection/>
            <ContactSection/>
            </LazyLoad>
        </S.Wrapper>
    )
}

export default LandingPage;