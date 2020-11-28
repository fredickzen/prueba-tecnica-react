import "./App.css";
import ContainerTest from "./components/others/ContainerTest";
import Form from "./components/pages/1.staterefsprops/Form";
import Counter from "./components/pages/2.effects/Counter";
import ListToBuy from "./components/pages/3.reducers/ListToBuy";
import Familia from "./components/pages/4.context/layouts/Familia";
import FamiliaRedux from "./components/pages/5.redux/layouts/FamiliaRedux";
import ApiClient from "./components/pages/6.fetch/ApiClient";
import { descriptions } from "./js/description";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3>Prueba técnica</h3>
        <ContainerTest title="Formulario: useState, useRef y props" description={descriptions[0]}>
          <Form />
        </ContainerTest>
        <ContainerTest title="Contador: useEfects" description={descriptions[1]}>
          <Counter/>
        </ContainerTest>
        <ContainerTest title="Lista de compras: useReduce" description={descriptions[2]}>
          <ListToBuy/>
        </ContainerTest>
        <ContainerTest title="Familia: useContext" description={descriptions[3]}>
          <Familia/>
        </ContainerTest>
        <ContainerTest title="Familia: Redux" description={descriptions[4]}>
          <FamiliaRedux/>
        </ContainerTest>
        <ContainerTest title="Rick and Morty: Fetch" description={descriptions[5]}>
          <ApiClient/>
        </ContainerTest>
      </div>
    </div>
  );
}

export default App;
