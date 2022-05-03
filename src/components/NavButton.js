import React from "react";

export const NavButton = (props) => {
  console.log(props);
  return (
    <a
      href={props.props}
      target="_blank"
      rel="noreferrer"
      className="border-4 border-blue-400 rounded-full p-2  bg-blue-200 hover:text-white hover:bg-blue-500"
    >
      {props.children}
    </a>
  );
};
