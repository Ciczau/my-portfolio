import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Wrapper = styled(motion.div)`
    display: flex;
    position: fixed;
    width: 100vw;
    justify-content: center;
    font-size: 4.5vw;
    bottom: ${(props) => (props.move ? '50px' : '80vh')};
    opacity: ${(props) => (props.opacity ? '0.2' : '0.7')};
    transition: opacity 0.3s ease, bottom 0.5s ease;

    z-index: 1;
`;
export const TagWrapper = styled.div`
    display: flex;
    div {
        color: #217fb6;
    }
    p {
        color: gray;
    }
`;
