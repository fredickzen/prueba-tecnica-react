import React, { useReducer, useRef, useState } from "react";
import PrintListProducts from "./PrintListProducts";
import { listToBuyReducers } from "./reducers/ListToBuyReducers";

const ListToBuy = () => {
  const elementRef = useRef();
  const quantityRef = useRef();

  const [listToBuy, dispatch] = useReducer(listToBuyReducers, []);

  const [errors, setErrors] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    setErrors("");

    const id = new Date().getTime();
    const element = elementRef.current.value;
    const quantity = quantityRef.current.value;

    if (element.length === 0 || quantity === "") {
      setErrors("Debes llenar todos los datos");
      return false;
    }

    if (quantity <= 0) {
      setErrors("Cantidad debe ser mayor a cero");
      return false;
    }

    if (quantity >= 10) {
      setErrors("Cantidad no puede ser mayor a diez");
      return false;
    }

    elementRef.current.value = "";
    quantityRef.current.value = "";

    handleAddLisToBuy({ id, element, quantity });
  };

  const handleAddLisToBuy = (newElement) => {
    dispatch({
      type: "add",
      payload: newElement,
    });
  };

  const handleDeleteLisToBuy = (elementId) => {
    const action = {
      type: "delete",
      payload: elementId,
    };

    dispatch(action);
  };

  const handleDuplicateLisToBuy = (elementId) => {
    const action = {
      type: "duplicate",
      payload: elementId,
    };

    dispatch(action);
  };

  return (
    <div>
      <form>
        <div className="row">
          <div className="col-4">
            <label htmlFor="element">Nuevo producto</label>
            <input
              type="text"
              className="form-control"
              id="element"
              name="element"
              ref={elementRef}
            />
          </div>
          <div className="col-4">
            <label htmlFor="quantity">Cantidad</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              max={3}
              ref={quantityRef}
            />
          </div>
          <div className="col-4">
            <span style={{ color: "red" }}>{errors}</span>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitForm}
            >
              Agregar nuevo producto
            </button>
          </div>
        </div>
      </form>

      {listToBuy.length > 0 && (
        <PrintListProducts
          listToBuy={listToBuy}
          handleDeleteLisToBuy={handleDeleteLisToBuy}
          handleDuplicateLisToBuy={handleDuplicateLisToBuy}
        />
      )}
    </div>
  );
};

export default ListToBuy;
