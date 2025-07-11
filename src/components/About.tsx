import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-black text-white py-16 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-10 flex flex-col md:flex-row gap-10 items-start">
        
        {/* Text Section */}
        <div className="flex-1 space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400">Hey there! 👋</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            I'm an MCA graduate focused on building user-friendly and responsive web applications. I enjoy turning ideas into real, functional websites using practical tools and clean code.
            <br /><br />
            I have hands-on experience in <span className="text-purple-300">React.js</span>, <span className="text-purple-300">Tailwind CSS</span>, and <span className="text-purple-300">Node.js</span>. My DSA skills are strong enough to solve real-world problems with <span className="text-purple-300">basic logic</span> and structured thinking.
          </p>
          <p className="text-sm italic text-gray-400">
            "Code is like poetry — meaningful, structured, and expressive."
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex-1 grid grid-cols-2 gap-6 text-sm text-gray-300">
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Frontend</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>HTML, CSS / SASS</li>
              <li>Tailwind, Bootstrap</li>
              <li>React.js, Redux</li>
              <li>Framer Motion, AOS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Backend</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Node.js, Express</li>
              <li>MongoDB, Firebase</li>
              <li>REST APIs</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;