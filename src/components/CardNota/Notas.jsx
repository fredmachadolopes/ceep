import { Component } from "react";
import { ReactComponent as DeleteSVG } from "../../assets/img/Delete.svg";
import "./estilo.css";

class Notas extends Component {
  y = this.props.titulo;
  deletar() {
    this.props.deletar(this.props.indice);
  }
  render() {
    return (
      <div>
        <section className="card-nota">
          <header className="card-nota_cabecalho">
            <h3 className="card-nota_titulo">{this.props.titulo}</h3>
            <DeleteSVG onClick={this.deletar.bind(this)} />
          </header>
          <h4 className="card-nota_titulo">{this.props.categoria}</h4>
          <p className="card-nota_texto">{this.props.texto}</p>
        </section>
      </div>
    );
  }
}
export default Notas;
