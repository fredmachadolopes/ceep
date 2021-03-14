import React, { Component } from "react";
import FormCadastro from "./components/FormularioDeCadastro/FormCadastro";
import  ListaDeNotas  from "./components/ListaDeNotas/ListaDeNotas";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
 
  render(){
    return (
      <section className="conteudo">
        <FormCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
