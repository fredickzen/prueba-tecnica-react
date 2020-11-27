import React from "react";
import PadreRedux from "../PadreRedux";
import { Provider } from 'react-redux';
import { store } from "../store/store";


const FamiliaRedux = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Provider store={ store }>
        <PadreRedux />
      </Provider>
    </div>
  );
};

export default FamiliaRedux;
