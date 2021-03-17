import React, { Component } from "react";
import FormCadastro from "./components/FormularioDeCadastro/FormCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
    this.arquivoLocal = JSON.parse(localStorage.getItem("notas"));
    if (isNaN(this.arquivoLocal)) {
      this.arquivoLocal.forEach((element) => {
        let temporario = { "titulo": element.titulo, "texto": element.texto };
        this.state.notas.push(temporario);
      });
    }
  }
  handleMudanca(titulo, texto) {
    const novaNota = { titulo, texto };
    this.state.notas.push(novaNota);
    this.setState(this.state.notas);
    localStorage.setItem("notas", JSON.stringify(this.state.notas));
  }
  render() {
    return (
      <section className="conteudo">
        <FormCadastro handleMudanca={this.handleMudanca.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
