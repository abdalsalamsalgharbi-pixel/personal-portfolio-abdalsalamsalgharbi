import React from 'react';
import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
  0% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.1) translate(20px, 20px); }
  100% { transform: scale(1) translate(0, 0); }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: #030712; /* Richer, darker black/blue */
  overflow: hidden;
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
`;

const GradientBlob = styled.div`
  position: absolute;
  filter: blur(80px);
  opacity: 0.4;
  border-radius: 50%;
  animation: ${breatheAnimation} 10s infinite ease-in-out;
`;

const AnimatedBackground = () => {
    return (
        <BackgroundContainer>
            <GradientBlob
                style={{
                    background: 'linear-gradient(135deg, #4f46e5, #818cf8)', // Indigo
                    width: '60vw',
                    height: '60vw',
                    top: '-20%',
                    left: '-20%',
                    animationDelay: '0s'
                }}
            />
            <GradientBlob
                style={{
                    background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)', // Sky
                    width: '50vw',
                    height: '50vw',
                    bottom: '-10%',
                    right: '-10%',
                    animationDelay: '-5s'
                }}
            />
            <GradientBlob
                style={{
                    background: 'rgba(139, 92, 246, 0.3)', // Violet
                    width: '40vw',
                    height: '40vw',
                    top: '40%',
                    left: '30%',
                    animationDelay: '-2s'
                }}
            />
            <GridOverlay />
        </BackgroundContainer>
    );
};

export default AnimatedBackground;
