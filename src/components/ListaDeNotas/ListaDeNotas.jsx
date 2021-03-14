import { Component } from "react";
import Notas from "../CardNota/Notas";
import "./estilo.css";
export class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho").map((titulos, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <Notas />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
