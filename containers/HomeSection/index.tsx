import React, { useRef, useEffect, useState } from 'react';
import * as S from './index.styles'
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const HomeSection = () => {
    const title: string = "Hi, I'm Wiktor";
    const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({x: 0, y: 0});
    const constraintsRefs = useRef<Array<React.RefObject<HTMLDivElement> | null>>(
        Array.from(title).map(() => React.createRef())
      );
      const { scrollYProgress} =  useViewportScroll();
      const scale = useTransform(scrollYProgress, [0, 1], [2, -1]);
      const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.03,
            staggerChildren: 0.03
          }
        }
      };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  useEffect(() => {
    const handleMousePos = (e: MouseEvent) => {
      setMousePosition({x: e.clientX, y: e.clientY}); 
    }
    window.addEventListener('mousemove', handleMousePos);
    return () => {
      window.removeEventListener('mousemove', handleMousePos);
    }
  })
    return (
        <S.Wrapper id="home" style={{scale}}>
          <div style={{transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{display: "flex"}}
            
            >
                {Array.from(title).map((el, index) => {
                    return (
                        <S.Title key={index}>
                            
                                <motion.div ref={constraintsRefs.current[index]}  drag variants={item}>
                                {el === ' ' ? <div>&nbsp;</div> : <div>{el}</div>}
                                </motion.div>
                        
                        </S.Title>
                    )
                })}
            </motion.div>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                style={{color: "white"}}
            >
                FRONT END & BACK END DEVELOPER
            </motion.div>
            </div>
        </S.Wrapper>
    )
}

export default HomeSection;