import React from "react";

const Home = () => {
  return (
    <div
      className="w-full h-screen backdrop-filter backdrop-blur-sm
                        flex items-center  text-gray-50"
    >
      <div className="flex flex-col  text-center mx-auto">
        <h1 className="text-4xl md:text-6xl animate-title-fade-up">
          IMAGINFOLIO
        </h1>
        <p className="text-md md:text-xl animate-sub-title-fade-in">
          A Place to Showcase your Creativity
        </p>
      </div>
    </div>
  );
};

export default Home;
