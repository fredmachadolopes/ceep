import { Component } from "react";
import "./estilo.css";
class Categoria extends Component {
  _salvarCategoria(event) {
    if (event.key === "Enter") {
      this.props.adicionandoCategoria(event.target.value);
      event.target.value = "";
    }
  }
  render() {
    return (
      <div className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li className="lista-categorias_item" key={index}>
                {categoria.categoria}
              </li>
            );
          })}
        </ul>
        <input
          className="lista-categorias_input"
          type="text"
          placeholder="Adicione uma categoria..."
          onKeyUp={this._salvarCategoria.bind(this)}
        />
      </div>
    );
  }
}

export default Categoria;
