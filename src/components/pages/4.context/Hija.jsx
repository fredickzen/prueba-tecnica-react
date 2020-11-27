import React, { useContext } from "react";
import { AhorrosContext } from "./hooks/context/AhorrosContext";

const Hija = () => {
  const { dinero, setDinero } = useContext(AhorrosContext);
  return (
    <div style={{ backgroundColor: "#76448A", padding: "10px" }}>
      <h4>Hija</h4>
      <button  className="btn btn-primary" onClick={() => setDinero(dinero - 1000)}>
        Gastos universtarios
      </button>
    </div>
  );
};

export default Hija;
