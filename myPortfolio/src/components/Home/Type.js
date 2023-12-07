import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Currently! 👋 , I am actively seeking new job opportunities to further contribute my skills and passion in the field.",
          "I thrive on challenges and am committed to making a positive impact through my work. ",
          ,
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 300,
      }}
    />
  );
}

export default Type;
