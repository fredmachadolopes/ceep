import { Component } from "react";
import "./estilo.css"
//import {Tentativa} from "./index"

class FormCadastro extends Component {
  pegarDados(event){
   console.log(event.target.value)
 }
  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onBlur={this.pegarDados}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit"
        onClick={this.handleMudanca}>
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormCadastro;
