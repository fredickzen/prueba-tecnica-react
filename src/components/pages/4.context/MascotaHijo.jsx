import React, { useContext } from "react";
import { AhorrosContext } from "./hooks/context/AhorrosContext";

const MascotaHijo = () => {
  const { dinero, setDinero, setDolares, dolares } = useContext(AhorrosContext);



  return (
    <div style={{ backgroundColor: "#17202A", padding: "10px" }}>
      <h4>Perro</h4>
      <button  className="btn btn-primary btn-block" onClick={() => setDinero(dinero + 50)}>
        Ganar competencias nacionales
      </button>
      <br/>
      <button  className="btn btn-success btn-block" onClick={() => setDolares(dolares + 50)}>
      Ganar competencias internacionales
      </button>
    </div>
  );
};

export default MascotaHijo;
