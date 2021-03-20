import { Component } from "react";
import Notas from "../CardNota/Notas";
import "./estilo.css";
export class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <Notas
                indice={index}
                titulo={nota.titulo}
                deletar={this.props.deletarNota}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
