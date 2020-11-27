import React from "react";
import { useSelector } from "react-redux";

const AlcanciaReudx = () => {

  const { dinero, dolares } = useSelector((state) => state.ahorros);

  return (
    <div
      style={{
        backgroundColor: "#B7950B ",
      }}
    >
      Hay ahorrado ${dinero}
      <br />
      Dolares $ {dolares}
    </div>
  );
};

export default AlcanciaReudx;
