import avatar from "../assets/man.svg";
import React, { useState } from "react";
const data = require("../data/data.json");

export const getData = () => {};
const Post = ({ name, url, likes, description, location }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      className={`flex flex-col shadow-2xl bg-gray-100 rounded-lg text-gray-900 max-w-sm
            my-2 `}
      tabIndex="1"
      onBlur={() => {
        setShowDescription(false);
      }}
    >
      <div className="flex flex-row px-5 h-16 p-2">
        <img src={avatar} className="h-full  pr-2 self-center" />
        <div className="flex flex-col   self-center">
          <p className="font-semibold lg:text-2xl text-lg leading-3">
            {name}
            <br />
            <span className="text-gray-700 lg:text-lg text-sm font-light">
              {location}
            </span>
          </p>
        </div>
      </div>
      <img
        src={url}
        className=" mb-2 max-w-sm object-cover object-center w-full"
        loading="lazy"
        onLoad={() => setVisible(true)}
      />

      <div className="px-5 py-1 font-medium">
        <span className="lg:text-2xl text-lg mb-2">
          <i className="far fa-heart pr-2"></i>
          {likes}
        </span>
        <p
          className={`lg:text-xl text-lg ${
            !showDescription ? "line-clamp-1 " : " "
          }`}
          onClick={toggleShowDescription}
          tabIndex="2"
          onBlur={() => setShowDescription(false)}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
export const getPosts = () => {
  return data.map(({ creator, url, likes, description, location }, key) => (
    <Post
      name={creator}
      url={url}
      likes={likes}
      description={description}
      location={location}
      key={key}
    ></Post>
  ));
};
