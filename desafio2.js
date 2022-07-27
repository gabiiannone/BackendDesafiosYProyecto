const fs = require(`fs`);

class Contenedor{

    constructor(archivo){

        this.archivo = "./archivos/" + archivo + ".json"


    }

    async getData(){
        try{
        return await fs.promise.readFile(this.archivo,"utf-8");
        }
        catch(error){
            if(error.code == "ENOENT") {
                fs.writeFile(this.archivo, "[]" , (error) =>{
                    if(error){
                        console.log("El archivo no pudo ser creado");
                    }
                })
            }
           
        }
    }


    async getAll(){
        const datos = await this.getData()
        return JSON.parse(datos)
    }





}

const producto1 = {
    nombre : "Pizzas",
    precio : "1000",

}
const productos = new Contenedor("contenedor")
productos.getData();











/*async function leerAA() {
    try {
        const contenido = await fs.promises.readFile("./productos.txt", "utf-8");
        console.log(contenido);
    }

    catch (err) {
        console.log("Error de lectura!", err)
    }
}

leerAA()*/

