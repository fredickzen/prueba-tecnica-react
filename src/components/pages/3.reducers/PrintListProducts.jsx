import React from "react";

const PrintListProducts = ({ listToBuy = [], handleDeleteLisToBuy, handleDuplicateLisToBuy }) => {
  return (
    <table className="table" style={{marginTop: "20px"}}>
      <thead>
        <tr>
          <td>Producto</td>
          <td>Cantidad</td>
          <td>Acción</td>
        </tr>
      </thead>
      <tbody>
        {listToBuy.map((x) => (
          <tr key={x.id}>
            <td>{x.element}</td>
            <td>{x.quantity}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteLisToBuy(x.id)}
              >
                Eliminar
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleDuplicateLisToBuy(x.id)}
              >
                Duplicar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PrintListProducts;
