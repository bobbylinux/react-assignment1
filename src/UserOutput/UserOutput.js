import React from "react";

const useroutput = props => {
  return (
    <div style={props.style}>
      <p>I'm {props.username}</p>
      <p>And this is my second paragraph</p>
    </div>
  );
};

export default useroutput;
