import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Associate Engineer At Benison Technologies Pvt Ltd ... @Google acquiring Company",
          "Proficient Full Stack Java ",
          "Proficient MERN Stack ",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 300,
      }}
    />
  );
}

export default Type;
