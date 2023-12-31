import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Wrapper = styled.div`
    height: auto;
    width: 100vw;
    overflow: hidden;
    background-color: #020116;
    font-family: 'Poiret One';
    cursor: none;
`;
export const CursorCircle = styled(motion.div)`
    width: 20px;
    height: 20px;
    top: -10px;
    left: -10px;
    border: 1px solid white;
    display: flex;
    pointer-events: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: fixed;
    mix-blend-mode: difference;

    z-index: 9999999;
`;

export const CursorInsideCircle = styled.div<{ pointer: boolean }>`
    width: ${(props) => (props.pointer === 'true' ? '11px' : '5px')};
    height: ${(props) => (props.pointer === 'true' ? '11px' : '5px')};
    background-color: #ffffff;
    transition: all 0.1s ease;
    border-radius: 50%;
`;
