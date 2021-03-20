import { Component } from "react";
import "./estilo.css";

class FormCadastro extends Component {
  constructor() {
    super();
    this._titulo = "";
    this._notas = "";
    this._categoria = "";
  }
  _selecionado(event) {
    this._categoria = event.target.value;
  }
  pegarTitulo(event) {
    this._titulo = event.target;
  }
  pegaNota(event) {
    this._notas = event.target;
  }
  handleMudanca(event) {
    event.preventDefault();
    event.stopPropagation();
    if (isNaN(this._notas && this._titulo && this._categoria)) {
      this.props.handleMudanca(
        this._titulo.value,
        this._notas.value,
        this._categoria
      );
      this._notas.value = "";
      this._titulo.value = "";
      this._notas = "";
      this._titulo = "";
    }
  }
  render() {
    return (
      <form className="form-cadastro" onSubmit={this.handleMudanca.bind(this)}>
        <select
          className="form-cadastro_input"
          onBlur={this._selecionado.bind(this)}
        >
          {this.props.categorias.map((categoria, index) => {
            return (
              <option key={index} value={categoria.categoria}>
                {categoria.categoria}{" "}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.pegarTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.pegaNota.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormCadastro;
