import tabla from "./tabla.js";
export default{
    name: document.querySelector("#myFormulario"),
    data: [],
    stopSend(){
        this.name.addEventListener("submit", (e)=>{
            this.data.push(Object.fromEntries(new FormData(e.target)))
            console.log(this.data);
            this.name.reset();
            e.preventDefault();
        })
    },
    listDataAll(){
        document.querySelector("#myList").addEventListener("click", (e)=>{
            tabla.createList();
            tabla.name.innerHTML = null;
            tabla.name.append(tabla.frag);
        })
    }
}