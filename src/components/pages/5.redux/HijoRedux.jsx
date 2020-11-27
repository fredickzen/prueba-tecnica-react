import React from "react";
import { useDispatch } from "react-redux";
import { dineroRemove } from "./actions/ahorros";

const HijoRedux = () => {
  const dispatch = useDispatch();
  const HijoDineroRemove = () => {
    dispatch(dineroRemove(500));
  };
  return (
    <div style={{ backgroundColor: "#A93226", padding: "10px" }}>
      <h4>Hijo</h4>
      <button className="btn btn-primary" onClick={HijoDineroRemove}>
        Gastos en deportes
      </button>
    </div>
  );
};

export default HijoRedux;
