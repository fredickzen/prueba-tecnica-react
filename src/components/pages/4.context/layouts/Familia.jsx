import React from "react";
import Padre from "../Padre";

const Familia = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Padre />
    </div>
  );
};

export default Familia;
