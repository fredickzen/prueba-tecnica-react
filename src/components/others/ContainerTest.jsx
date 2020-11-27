import React from "react";

const ContainerTest = ({ title, children }) => {
  return (
    <>
      <div className="card">
        <div className="card-header bg-primary text-light">
          <h3>{title}</h3>
        </div>
        <div className="card-body">{children}</div>
      </div>
      <br/>
    </>
  );
};

export default ContainerTest;
