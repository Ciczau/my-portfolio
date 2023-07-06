import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Wrapper = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: "Poiret One";
    align-items: center;
`

export const Title = styled.div`
    color: white;
    font-size: 50px;
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover{
        color: #880f2d;
        transition: all 0.3s ease;
        transform: translateY(-5px);
    }
`