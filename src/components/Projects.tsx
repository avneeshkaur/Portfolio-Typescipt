import React, { useState } from 'react';
import RocketAnimation from './RocketAnimation';

const Projects: React.FC = () => {
  const [launch, setLaunch] = useState<boolean>(false);
  const [launch2, setLaunch2] = useState<boolean>(false);
  const [launch3, setLaunch3] = useState<boolean>(false);

  const handleStreamSphereClick = (): void => {
    if (!launch) {
      setLaunch(true);
      setTimeout(() => {
        window.open("https://streamsphere-frontend.onrender.com/", "_blank");
        setLaunch(false);
      }, 2000);
    }
  };

  const handleAnimeSiteClick = (): void => {
    if (!launch2) {
      setLaunch2(true);
      setTimeout(() => {
        window.open("https://music-scroll-player.netlify.app/", "_blank");
        setLaunch2(false);
      }, 2000);
    }
  };

  const handlePortfolioClick = (): void => {
    if (!launch3) {
      setLaunch3(true);
      setTimeout(() => {
        window.open("https://avneesh-kaur-portfolio.netlify.app/", "_blank");
        setLaunch3(false);
      }, 2000);
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h2>

      {/* StreamSphere Project */}
      <div
        onClick={handleStreamSphereClick}
        className="max-w-4xl mx-auto mb-10 bg-[#111827] hover:bg-[#1f2937] transition duration-300 cursor-pointer border border-gray-700 rounded-2xl p-6 shadow-xl hover:scale-105"
      >
        <h3 className="text-2xl font-semibold mb-2 text-pink-500">StreamSphere – AI Multimedia Platform</h3>
        <p className="text-gray-300 mb-3">
          A futuristic mood-based multimedia web app that dynamically changes visuals, background music, games, and quotes using AI-powered FaceAPI.
          It provides emotion detection, personalized music, and immersive media experience using React, Node.js, and Firebase.
        </p>
        <p className="text-sm italic text-gray-400 mb-1">React, Tailwind CSS, Node.js, Firebase, FaceAPI</p>
        <p className="text-sm text-cyan-400 underline">🌐 Click to open StreamSphere</p>
      </div>
      {launch && <RocketAnimation onAnimationEnd={() => setLaunch(false)} />}

      {/* Anime Scroll Site */}
      <div
        onClick={handleAnimeSiteClick}
        className="max-w-4xl mx-auto mb-10 bg-[#111827] hover:bg-[#1f2937] transition duration-300 cursor-pointer border border-gray-700 rounded-2xl p-6 shadow-xl hover:scale-105"
      >
        <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Anime Headphone Scroll Animation</h3>
        <p className="text-gray-300 mb-3">
          An interactive web animation project where headphone images and background music change with each scroll.
          Built using JavaScript, HTML/CSS, and Anime.js to create engaging visuals, sound effects, and firework bursts. Deployed on Netlify.
        </p>
        <p className="text-sm italic text-gray-400 mb-1">HTML, CSS, JavaScript, Anime.js</p>
        <p className="text-sm text-cyan-400 underline">🌐 Click to open Anime Scroll Project</p>
      </div>
      {launch2 && <RocketAnimation onAnimationEnd={() => setLaunch2(false)} />}

      {/* Portfolio Website */}
      <div
        onClick={handlePortfolioClick}
        className="max-w-4xl mx-auto bg-[#111827] hover:bg-[#1f2937] transition duration-300 cursor-pointer border border-gray-700 rounded-2xl p-6 shadow-xl hover:scale-105"
      >
        <h3 className="text-2xl font-semibold mb-2 text-green-400">Avneesh Portfolio Website</h3>
        <p className="text-gray-300 mb-3">
          A modern, animated portfolio to showcase my skills, projects, and contact info. Built entirely in React with smooth scroll, dark theme, and deployment on Netlify.
        </p>
        <p className="text-sm italic text-gray-400 mb-1">React, Tailwind CSS, AOS, Framer Motion</p>
        <p className="text-sm text-cyan-400 underline">🌐 Click to open Portfolio</p>
      </div>
      {launch3 && <RocketAnimation onAnimationEnd={() => setLaunch3(false)} />}
    </section>
  );
};

export default Projects;