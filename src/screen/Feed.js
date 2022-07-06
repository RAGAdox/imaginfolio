import React, { useEffect, useState } from "react";

import Card from "../components/Card";

import { getFeedPosts } from "../helpers/feed";
const Feed = () => {
  const [postsList, setPostsList] = useState([]);
  useEffect(() => {
    getFeedPosts().then((posts) => {
      setPostsList([...postsList, ...posts]);
    });
  }, []);
  console.log("postsList====>", postsList);
  return (
    <div className="w-full h-screen overflow-y-auto text-gray-50 grid grid-cols-2 items-center justify-center content-center p-10">
      {postsList &&
        postsList.length > 0 &&
        postsList.map((post, index) => (
          <Card
            key={index}
            id={post.id}
            creator={post.creator}
            imgUrl={post.url}
          />
        ))}
    </div>
  );
};

export default Feed;
