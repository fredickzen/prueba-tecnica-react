import React from "react";
import { useDispatch } from "react-redux";
import { dineroAdd } from "./actions/ahorros";
import AlcanciaReudx from "./AlcanciaRedux";
import HijaRedux from "./HijaRedux";
import HijoRedux from "./HijoRedux";

const PadreRedux = ({ titulo = "Madre de familia" }) => {
  const dispatch = useDispatch();

  const MadreDineroAdd = () => {
    dispatch(dineroAdd(1000));
  };

  return (
    <div style={{ backgroundColor: "gray", padding: "5px" }}>
      <h2>{titulo}</h2>

      <button className="btn btn-success" onClick={MadreDineroAdd}>
        Trabajar
      </button>
      <br />
      <br />

      <AlcanciaReudx />
      <div style={{ display: "flex" }}>
        <HijoRedux />
        <HijaRedux />
      </div>
    </div>
  );
};

export default PadreRedux;
