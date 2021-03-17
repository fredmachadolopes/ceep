import { Component } from "react";
import "./estilo.css";

class FormCadastro extends Component {
  constructor(props) {
    super(props);
    this._titulo = "";
    this._notas = "";
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
    if (isNaN(this._notas && this._titulo)) {
      this.props.handleMudanca(this._titulo.value, this._notas.value)
      this._notas.value = ""; 
      this._titulo.value = "";
      this._notas ="";
      this._titulo = "";
    }
  }
  render() {
    return (
      <form className="form-cadastro" onSubmit={this.handleMudanca.bind(this)}>
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
