import React, { Component } from "react";
import FormCadastro from "./components/FormularioDeCadastro/FormCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import Categoria from "./components/listaDeCategoria/Categoria";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
    this.recebeCategoria = JSON.parse(localStorage.getItem("categoria"));
    this.arquivoLocal = JSON.parse(localStorage.getItem("notas"));
    if (isNaN(this.recebeCategoria)) {
      this.recebeCategoria.forEach((categoria) => {
        let categoriaTemporaria = { categoria: categoria.categoria };
        this.state.categorias.push(categoriaTemporaria);
      });
    }
    if (isNaN(this.arquivoLocal)) {
      this.arquivoLocal.forEach((element) => {
        let temporario = {
          titulo: element.titulo,
          texto: element.texto,
          categoria: element.categoria,
        };
        this.state.notas.push(temporario);
      });
    }
  }

  deletarNota(index) {
    this.state.notas.splice(index, 1);
    this.setState(this.state.notas);
    localStorage.setItem("notas", JSON.stringify(this.state.notas));
  }
  adicionandoCategoria(categoria) {
    let novaCategoria = { categoria };
    this.state.categorias.push(novaCategoria);
    this.setState(this.state.categorias);
    localStorage.setItem("categoria", JSON.stringify(this.state.categorias));
  }
  handleMudanca(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    this.state.notas.push(novaNota);
    this.setState(this.state.notas);
    localStorage.setItem("notas", JSON.stringify(this.state.notas));
  }
  render() {
    return (
      <section className="conteudo">
        <FormCadastro
          handleMudanca={this.handleMudanca.bind(this)}
          categorias={this.state.categorias}
        />
        <main className="conteudo-principal">
          <Categoria
            adicionandoCategoria={this.adicionandoCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            deletarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
