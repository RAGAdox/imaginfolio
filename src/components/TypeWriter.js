import React, { useState, useEffect } from "react";

const TypeWriter = ({ text = "", delay = 2000, speed = 75 }) => {
  const [typed, setTyped] = useState(" ");
  let index = 0;
  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setTyped((typed) => {
            return typed + text[index++];
          });
        } else {
          clearInterval(interval);
        }
      }, speed);
    }, delay);
  }, []);
  return (
    <p className="w-fit-content self-center typewriter-caret animate-typewriter-caret">
      {typed}
    </p>
  );
};

export default TypeWriter;
