import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "../components/Card";

import { getFeedPosts } from "../helpers/feed";
import { exportHandeler } from "../helpers/errorHandeler";
import { connect } from "react-redux";
const Feed = ({ incrementOffset }) => {
  const [offset, setOffset] = useState(0);
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [maxScrolled, setMaxScrolled] = useState(0);
  const pageRef = useRef(null);
  let history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    getFeedPosts(10, offset)
      .then((posts) => {
        setIsLoading(false);
        setPostsList([...postsList, ...posts]);
      })
      .catch((err) => {
        const { shouldRedirect, path } = exportHandeler(err);
        if (shouldRedirect) history.push(path);
      });
  }, [offset]);

  return (
    <div
      ref={pageRef}
      className="w-full h-screen p-10 mb-10 text-gray-50 flex flex-col items-center	relative overflow-y-auto"
      onScroll={() => {
        const { scrollTop, scrollHeight, clientHeight } = pageRef.current;
        if (
          scrollTop + clientHeight === scrollHeight &&
          maxScrolled < scrollHeight
        ) {
          setMaxScrolled(scrollHeight);
          setOffset((oldOffset) => oldOffset + 10);
        }
      }}
    >
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
const mapStateToProps = (state) => {
  return {
    offset: state.feed.offset,
  };
};
const mapDispatchToProps = (dispatch) => ({
  incrementOffset: () => dispatch({ type: "feed/incrementOffset" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
