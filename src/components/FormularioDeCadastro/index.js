import { SubirDados } from "./teste.js";
import FormCadastro from "./FormCadastro";
export default FormCadastro;

export class Dados {
  constructor(titulo, nota) {
    this._cadastro = new SubirDados(titulo, nota);
    this._todosOsDados = [];
  }

  subirDados() {
    this._todosOsDados.push(this._cadastro);

    let dados = JSON.parse(localStorage.getItem("notas"));
    if (isNaN(dados)) {
        dados.forEach(dado =>{
            
            this._salvandoDados = new SubirDados(dado._titulo,dado._nota);
            this._todosOsDados.push(this._salvandoDados);
        })
      
    }

    localStorage.setItem("notas", JSON.stringify(this._todosOsDados));
  }
  
}
