import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

export const Wrapper = styled(motion.section)`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    transition: all 0.5s ease;
    scroll-snap-align: start;
`;

export const Title = styled.div`
    font-size: 40px;
    color: white;
`;

export const ProjectsContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    justify-content: center;
`;

export const ProjectElement = styled(motion.div)`
    color: white;
    width: 500px;
    max-width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    height: 400px;
    margin: 20px;
    box-shadow: 0px 0px 5px 3px #79797976;

    transition: all 0.3s ease-in-out;
    background: ${(props) =>
        props.image &&
        `linear-gradient(
                            0deg,
                            rgba(0, 0, 0, 1) 20%,
                            rgba(0, 0, 0, 0.3138686131386861) 51%,
                            rgba(0, 0, 0, 1) 97%
                        ),url(${props.image})`};
    background-size: 130%;
    background-position: center top;
    &:hover {
        box-shadow: 0px 0px 5px 3px #d3d2d276;
        background-size: 150%;
    }
`;

export const ProjectTitle = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
`;

export const ProjectDesc = styled.div`
    width: 100%;
    height: 30%;
    color: white;
    display: flex;
    font-size: 18px;
    font-weight: bold;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProjectInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 13px;
    div {
        width: 80%;
    }
`;
export const GithubIcon = styled(FaGithub)`
    width: 40px;
    cursor: pointer;
`;
