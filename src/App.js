import "./App.css";
import ContainerTest from "./components/others/ContainerTest";
import Form from "./components/pages/1.staterefsprops/Form";
import Counter from "./components/pages/2.effects/Counter";
import ListToBuy from "./components/pages/3.reducers/ListToBuy";
import Familia from "./components/pages/4.context/layouts/Familia";
import FamiliaRedux from "./components/pages/5.redux/layouts/FamiliaRedux";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3>Prueba técnica</h3>
        <ContainerTest title="Formulario: useState, useRef y useProps">
          <Form />
        </ContainerTest>
        <ContainerTest title="Contador: useEfects">
          <Counter/>
        </ContainerTest>
        <ContainerTest title="Lista de compras: useReduce">
          <ListToBuy/>
        </ContainerTest>
        <ContainerTest title="Familia: useContext">
          <Familia/>
        </ContainerTest>
        <ContainerTest title="Familia: Redux">
          <FamiliaRedux/>
        </ContainerTest>
      </div>
    </div>
  );
}

export default App;
