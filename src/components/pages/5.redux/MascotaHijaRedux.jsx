import React from "react";
import { useDispatch } from "react-redux";
import { dineroAdd, DolaresAdd } from "./actions/ahorros";

const MascotaHijaRedux = () => {
  const dispatch = useDispatch();

  const MascotaDineroAdd = () => {
    dispatch(dineroAdd(100));
  };

  const MascotaDolaresAdd = () => {
    dispatch(DolaresAdd(200));
  };
  return (
    <div style={{ backgroundColor: "#17202A", padding: "10px" }}>
      <h4>Gato</h4>
      <button className="btn btn-primary btn-block" onClick={MascotaDineroAdd}>
        Ganar competencias nacionales
      </button>
      <br />
      <button className="btn btn-success btn-block" onClick={MascotaDolaresAdd}>
        Ganar competencias internacionales
      </button>
    </div>
  );
};

export default MascotaHijaRedux;
