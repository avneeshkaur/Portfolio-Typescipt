import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import girlImage from '../assets/girl.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 relative">
      <div className="flex-1 text-center md:text-left z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I'm{' '}
          <span className="text-pink-500">
            <TypeAnimation
              sequence={[
                'Web Developer', 2000,
                'Full Stack Developer', 2000,
                'Backend Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          I build modern and responsive websites to bring ideas to life!
        </p>
      </div>

      <div className="flex-1 mt-8 md:mt-0 z-10">
        <img
          src={girlImage}
          alt="Girl Illustration"
          className="rounded-2xl w-full max-w-sm mx-auto shadow-2xl"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-0"></div>
    </section>
  );
};

export default Hero;