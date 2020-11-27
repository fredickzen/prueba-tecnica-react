import React from "react";
import { useDispatch } from "react-redux";
import { dineroRemove } from "./actions/ahorros";
import MascotaHijaRedux from "./MascotaHijaRedux";

const HijaRedux = () => {
  const dispatch = useDispatch();

  const HijaDineroRemove = () => {
    dispatch(dineroRemove(700));
  };

  return (
    <div style={{ backgroundColor: "#76448A", padding: "10px" }}>
      <h4>Hija</h4>
      <button className="btn btn-primary" onClick={HijaDineroRemove}>
        Gastos universitarios
      </button>
      <br />
      <br />
      <MascotaHijaRedux />
    </div>
  );
};

export default HijaRedux;
