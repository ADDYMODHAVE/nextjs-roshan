import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Typewriter = () => {
  const [text] = useTypewriter({
    words: ["Photographer", "VideoGrapher", "Youtuber", "Vlogger"],
    loop: true,
  });

  return (
    <div
      className="text-dark text-center bg-dark"
      style={{ height: "10rem", maxHeight: "10rem" }}
    >
      <h1 className="pt-5 text-light overflow-hidden">
        I'm a <span style={{ fontWeight: "bold", color: "blue" }}>{text}</span>
        <Cursor cursorStyle="<" />
      </h1>
    </div>
  );
};
