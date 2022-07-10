import React from "react";

const Card = ({ id, creator, imgUrl, caption }) => {
  return (
    <div className="p-4 m-4 md:w-80 rounded-lg">
      <p>{creator}</p>
      <img className="rounded-lg" src={imgUrl} />
      <p>{caption}</p>
    </div>
  );
};
export default Card;
