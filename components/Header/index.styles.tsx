import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
    color: white;
    font-family: 'Poiret One';
    right: 0;
    height: 100vh;
    z-index: 999999;
    display: flex;
    position: fixed;

    padding: 5px;

    align-items: center;
`;
export const Menu = styled.div`
    display: flex;
    height: 50%;
    width: 100%;
`;

export const MenuElement = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.1s ease;
    align-items: center;
`;

const LineAnimation = keyframes`
    0% {
        width: 0px;
    }
    100% {
        width: 100%;
    }
`;
export const MenuItems = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`;
export const MenuLine = styled.div`
    height: 100%;
    background-color: #948f8f3d;
    width: 2px;
    box-shadow: 0px 0px 1px 1px #9e99991d;
    margin: 5px;

    ::before {
        content: '';
        display: block;
        height: ${(props) => {
            return 100 * props.percentage + '%';
        }};
        background-color: #5387d69d;
        transition: all 0.5s ease;
    }
`;
