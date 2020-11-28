import React, { useEffect, useRef, useState } from "react";
import { api } from "./js/environment";

const ApiClient = () => {
  const [data, setData] = useState({});

  const characterRef = useRef();

  const changeCharacter = () => {

    const selected = characterRef.current.value;
    fetch(`${api}character/${selected}`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetch(`${api}${"character/1"}`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <label htmlFor="character">Personaje</label>
          <select
            name="character"
            id="character"
            className="form-control"
            onChange={changeCharacter}
            ref={characterRef}

          >
            <option value="1">Rick Sanchez</option>
            <option value="2">Morty Smith</option>
            <option value="3">Summer Smith</option>
          </select>
          <br/>
        </div>
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default ApiClient;
