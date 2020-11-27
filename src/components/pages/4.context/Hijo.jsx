import React, { useContext } from "react";
import { AhorrosContext } from "./hooks/context/AhorrosContext";
import MascotaHijo from "./MascotaHijo";

const Hijo = () => {
  const { dinero, setDinero } = useContext(AhorrosContext);
  return (
    <div style={{backgroundColor: "#A93226", padding: "10px"}}>
      <h4>Hijo</h4>
      <button className="btn btn-primary" onClick={() => setDinero(dinero - 500)}>
        Gastos en deportes
      </button>
      <br/><br/>
      <MascotaHijo/>
    </div>
  );
};

export default Hijo;
