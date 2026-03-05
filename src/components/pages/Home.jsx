import React from "react";
import Nam from "../../assets/Nam.jpg";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white gap-5 mt-10">
      <div className="w-40 h-40 rounded-full border-2 border-cyan-400 overflow-hidden">
        <img src={Nam} alt="avatar" className="w-full h-full object-cover" />
      </div>

      <div className="text-4xl font-bold">Pham Hoai Nam</div>

      <div className="text-cyan-300">WEB DEVELOPER</div>

      <div className="w-3/4 text-center">
        Having completed a previous web development internship, I am now looking
        for a React Internship opportunity to gain more practical experience in
        building scalable and maintainable front-end applications. I am
        passionate about improving my skills in React, component architecture,
        and API integration while contributing positively to a development team.
      </div>

      <div className="flex gap-4">
        <Link
          to="/"
          className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-xl"
        >
          Discover More
        </Link>

        <Link
          to="https://github.com/NamSnow"
          className="px-6 py-2.5 rounded-xl bg-[#0f1419] text-white font-medium hover:bg-[#1c2228] transition duration-300 border border-gray-700 hover:border-gray-500"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default Home;
