import React, { useState } from "react";
import PrintCounter from "./PrintCounter";

const Counter = () => {
  const [statusCount, setStatusCount] = useState(false);
  return (
    <div>
      <button
        className="btn btn-warning"
        onClick={() => setStatusCount(!statusCount)}
      >
        {`${statusCount ? "Ocultar" : "Ver"} contador`}
      </button>
      {statusCount && <PrintCounter />}
    </div>
  );
};

export default Counter;
