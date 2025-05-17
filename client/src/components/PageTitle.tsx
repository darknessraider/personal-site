import React from "react";

type Props = {
  text: string;
}

const PageTitle: React.FC<Props> = ({ text }) => {
  return (
    <h1 style={textStyle}>{text}</h1>
  );
};

const textStyle: React.CSSProperties = {
  position: "absolute",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "2rem",
  color: "#333",
  margin: 0,
};

export default PageTitle;
