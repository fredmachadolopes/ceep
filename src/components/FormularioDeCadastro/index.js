import FormCadastro from "./FormCadastro"
export default FormCadastro;

export class Tentativa{
    numArray = [];
    constructor(n){
        this._num = n;
    }

    num(){
    
        localStorage.setItem("valores", JSON.stringify(Tentativa.numArray))
        
    }
}