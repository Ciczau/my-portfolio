import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Wrapper = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Poiret One';
    scroll-snap-align: start;
    align-items: center;
`;

export const Letter = styled.div`
    color: white;
    font-size: 50px;
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover {
        color: #880f2d;
        transition: all 0.3s ease;
        transform: translateY(-5px);
    }
    @media screen and (max-width: 767px) {
        font-size: 20px;
    }
`;
export const TitleWrapper = styled(motion.div)`
    display: flex;
`;
export const Desc = styled(motion.div)`
    display: flex;
    @media screen and (max-width: 767px) {
        font-size: 10px;
    }
`;
