const mascotas = [];
const libros = [];
class Usuario {
    constructor(nombre, apellido, mascota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascota = mascota;
    };
getFullName(){
    console.log(this.nombre);
    console.log(this.apellido);
    };
addMascota(){
    mascotas.push(prompt("Ingrese Nueva Mascota"));
    };
countMascotas(){
    console.log(mascotas.length);
    };
};
class Libro {
    constructor(id, autor){
        this.id = id;
        this.autor = autor;
    };
};

const User = new Usuario(prompt('Ingrese Nombre'), prompt('Ingrese Apellido'));
User.getFullName();
User.addMascota();
User.countMascotas();

const newLibro = () => {
    libros.push(new Libro(prompt("Ingrese nombre de libro"), prompt("Quien es su autor?")));
    console.log(libros.length);
}

