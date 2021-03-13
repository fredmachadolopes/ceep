import React, { Component } from "react";
import FormCadastro from "./components/FormCadastro";
import  ListaDeNotas  from "./components/ListaDeNotas";

class App extends Component {
  render(){
    return (
      <section>
        <FormCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
