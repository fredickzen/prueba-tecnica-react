import React, { useState } from "react";
import { AhorrosContext } from "./hooks/context/AhorrosContext";
import Alcancia from "./Alcancia";
import Hija from "./Hija";
import Hijo from "./Hijo";

const Padre = ({ titulo = "Padre de familia" }) => {
  const [dinero, setDinero] = useState(10000);
  const [dolares, setDolares] = useState(0);

  return (
    <div style={{backgroundColor: "gray", padding: "5px"}}>
      <h2>{titulo}</h2>
      <button
        className="btn btn-success"
        onClick={() => setDinero(dinero + 1000)}
      >
        Trabajar
      </button>
      <br/><br/>
      <AhorrosContext.Provider
        value={{ dinero, setDinero, dolares, setDolares }}
      >
        <Alcancia />
        <div style={{ display: "flex" }}>
          <Hijo />
          <Hija />
        </div>
      </AhorrosContext.Provider>
    </div>
  );
};

export default Padre;
