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
    backdrop-filter: blur(5px);
    background-color: #02011613;
    justify-content: center;
    align-items: center;
    padding: 70px;
    transition: all 0.3s ease;
    border: 1px solid grey;
    box-shadow: 0px 0px 5px 3px #b4b4b439;
    margin: 20px;
    &:hover {
        box-shadow: 0px 0px 5px 3px #bbbaba8d;
        background-color: #50505364;
    }
`;
const AnimateIcon = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
export const IconContainer = styled.div`
    transition: all 0.3s ease;
    ${ExperienceContainer}:hover & {
        transform: scale(0.2);
        opacity: 0.3;
    }
`;
export const IconWrapper = styled.div`
    animation-name: ${AnimateIcon};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    height: 100%;
    animation-duration: ${(props) => props.animate === true && '15s'};
`;
export const Description = styled.div`
    position: absolute;
    width: 250px;
    font-size: 1.6rem;
    text-align: center;
`;
