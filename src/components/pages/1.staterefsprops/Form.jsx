import React, { useRef, useState } from "react";
import PrintFormObject from "./PrintFormObject";

const Form = () => {
  const nameRef = useRef("");
  const mailRef = useRef("test@gmail.com");
  const tipoUsuarioRef = useRef();

  const [form, setForm] = useState({});

  const ImprimirFormulario = (event, origen) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const mail = mailRef.current.value;
    const tipoUsuario = tipoUsuarioRef.current.value;

    setForm({
      name,
      mail,
      origen,
      tipoUsuario,
    });
  };

  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-6">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              ref={nameRef}
            />
          </div>
          <div className="col-6">
            <label htmlFor="mail">Correo</label>
            <input
              type="email"
              className="form-control"
              name="mail"
              id="mail"
              ref={mailRef}
            />
          </div>
          <div className="col-6">
            <label htmlFor="tipoUsuario">Tipo usuario</label>
            <select
              name="tipoUsuario"
              id="tipoUsuario"
              ref={tipoUsuarioRef}
              defaultValue={"2"}
              className="form-control"
            >
              <option value="Admin">Admin</option>
              <option value="Report">Report</option>
            </select>
          </div>
          <div className="col-3">
            <br/>
            <button
              className="btn btn-success"
              type="submit"
              onClick={(e) => ImprimirFormulario(e, 1)}
            >
              Imprimir desde botón 1
            </button>
          </div>
          <div className="col-3">
            <br/>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={(e) => ImprimirFormulario(e, 2)}
            >
              Imprimir desde botón 2
            </button>
          </div>
        </div>
      </form>
      <PrintFormObject formObject={form} />
    </div>
  );
};

export default Form;
