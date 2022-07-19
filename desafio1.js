class Usuario {
    constructor(nombre, apellido, libros, mascotas) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        this.librosADevolver = [];
    }

   

    getFullName() {
        return console.log(`El nombre del usuario es ${this.nombre} y se apellida ${this.apellido}`);
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countMascotas() {
        return console.log(`Tiene ${this.mascotas.length} mascotas`);
    }

    addBooks(libro) {
        this.libros.push(libro);
    }

    getBookNames() {
      for (let libro of this.libros) {
        this.librosADevolver.push(libro.titulo);
      }
        console.log(this.librosADevolver);
    }
}

let usuario1 = new Usuario("Gabriel","Iannone",[{titulo: "El Alquimista", Autor: "Paulo Cohelo"}], ["Perro", "Hamster"]);

usuario1.getFullName();
usuario1.addMascota("Gato");
usuario1.countMascotas();
usuario1.addBooks({titulo: "El Señor de los Anillos", autor: "J.R.R Tolkien"});
usuario1.getBookNames();

let usuario2 = new Usuario("Juan","Gonzalez",[{titulo: "El lenguaje del alma", Autor: "Josep Soler"}], ["Gato", "Conejo"]);
usuario2.getFullName();
usuario2.countMascotas();
usuario2.getBookNames();




