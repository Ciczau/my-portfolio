import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Wrapper = styled(motion.div)`
    display: flex;
    position: fixed;
    width: 100vw;
    color: white;
    justify-content: center;
    font-size: 4.5vw;
    bottom: ${(props) => (props.move ? '50px' : '80vh')};
    opacity: ${(props) => (props.opacity ? '0.1' : '0.25')};
    transition: opacity 0.3s ease, bottom 0.5s ease;

    z-index: 0;
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
