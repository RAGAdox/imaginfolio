import React from "react";

const Card = ({ id, creator, imgUrl, caption }) => {
  console.log({ id, creator, imgUrl, caption });
  return (
    <div className="p-4 m-4 max-w-sm backdrop-filter backdrop-blur-lg">
      <p>{creator}</p>
      <img className="rounded-lg" src={imgUrl} />
      <p>{caption}</p>
    </div>
  );
};
Card.defaultProps = {
  creator: "RAGAdox",
  imgUrl:
    "https:images.unsplash.com/photo-1655633572548-b1341dcc4dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  caption: "This is a beautiful image",
};
export default Card;
