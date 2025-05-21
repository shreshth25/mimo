import React from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../assets/animations/success.json';

const SuccessAnimation = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '-50px',
        left: '-50px',
        width: '480px',
        height: '480px',
        zIndex: 9999, // ensures it's on top
        pointerEvents: 'none', // allows clicks through
      }}
    >
      <Lottie animationData={successAnimation} loop={true} />
    </div>
  );
};

export default SuccessAnimation;
