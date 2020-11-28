import React from "react";

const ContainerTest = ({ title, description, children }) => {
  return (
    <>
      <div className="card">
        <div className="card-header bg-primary text-light">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
        <div className="alert alert-info">
        {description}
        </div>
        
        
        {children}</div>
      </div>
      <br/>
    </>
  );
};

export default ContainerTest;
