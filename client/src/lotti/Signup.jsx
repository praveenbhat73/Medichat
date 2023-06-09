import React from 'react';
// import './styles.css';
import Lottie from 'react-lottie';
import animationData from './118046-lf20-oahmox5rjson.json';

export default function App() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={500}
          width={500}
        />
      </div>
    );
  }