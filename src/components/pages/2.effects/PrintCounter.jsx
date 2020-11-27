import React, { useEffect, useState } from 'react';

const PrintCounter = () => {
    const [cuenta, setCuenta] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCuenta(cuenta+1);
          }, 1000);
          return () => clearInterval(interval);
    })
    return (
        <div style={{padding: "30px"}}>
            <h3>Contador: {cuenta} </h3>
        </div>
    );
}

export default PrintCounter;
