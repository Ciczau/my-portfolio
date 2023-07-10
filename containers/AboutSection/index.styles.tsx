import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
export const Wrapper = styled(motion.section)`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poiret One';
    transition: all 0.5s ease;
    scroll-snap-align: start;
`;

export const ExperienceWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
export const ExperienceContainer = styled.div`
    width: 300px;
    color: white;
    height: 300px;
    z-index: 1;
    display: flex;
    background-color: ${(props) =>
        props.animate === true ? '#22222b' : '#020116'};
    justify-content: center;
    align-items: center;
    padding: 70px;
    border: 1px solid grey;
    box-shadow: 0px 0px 5px 3px #b4b4b439;
    margin: 20px;
`;
const AnimateIcon = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const IconWrapper = styled.div`
    animation-duration: ${(props) => props.animate === true && '15s'};
    animation-name: ${AnimateIcon};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    height: 100%;
`;
