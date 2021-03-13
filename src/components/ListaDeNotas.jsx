import { Component } from "react";
import  Notas  from "./Notas";

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <Notas />
        <Notas />
        <Notas />
      </ul>
    );
  }
}

export default ListaDeNotas;