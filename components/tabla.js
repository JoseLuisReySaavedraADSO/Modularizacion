import formulario from "./formulario.js";
export default{
    name: document.querySelector("#myTabla"),
    frag: document.createDocumentFragment(),
    createList(){
        this.frag = document.createDocumentFragment();
        formulario.data.forEach((val,id)=>{
            let tr = document.createElement("TR")
            let tdId = document.createElement("TD")
            tdId.insertAdjacentText("beforeend", id)
            let tdNom = document.createElement("TD")
            tdNom.insertAdjacentText("beforeend", val.nombre)
            let tdApe = document.createElement("TD")
            tdApe.insertAdjacentText("beforeend", val.apellido)
            let tdEda = document.createElement("TD")
            tdEda.insertAdjacentText("beforeend", val.edad)
            tr.append(tdId, tdNom, tdApe, tdEda)
            this.frag.append(tr)
        })
    }
}