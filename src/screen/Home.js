import React from "react";
import TypeWriter from "../components/TypeWriter";
const Home = () => {
  return (
    <div
      className="w-full h-screen
                        flex items-center  text-gray-50"
    >
      <div className="flex flex-col  text-center mx-auto">
        <h1 className="text-4xl md:text-6xl animate-title-fade-up">
          IMAGINFOLIO
        </h1>
        <TypeWriter string="A Place to Showcase your Creativity"></TypeWriter>
      </div>
    </div>
  );
};

export default Home;
