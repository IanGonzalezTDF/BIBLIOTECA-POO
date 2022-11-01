import { Biblioteca } from "./Biblioteca";
import { Libro } from "./Libro";
import { Socio } from "./Socio";

let Libro1: Libro = new Libro ('El Principito', 'Antoine de Saint-Exupéry', 'Narrativo', true);
let Libro2: Libro = new Libro ('Los Viajes de Gulliver', 'Jonathan Swift', 'Fantastico', true);
let Libro3: Libro = new Libro ('El Viejo y el Mar', 'Ernest Hemingway', 'Novela', true);
let Libro4: Libro = new Libro ('El Principe', 'Nicolás Maquiavelo', 'Historico', true);
let Libro5: Libro = new Libro ('El Origen de las Especices', 'Charles Darwin', 'Ciencia', true);
let ListadoLibros: Libro[] = [];

let Socio1: Socio = new Socio ('Gustavo', 'González', 30597845, ListadoLibros);
let Socio2: Socio = new Socio ('Gabriel', 'Lopez', 35485965, ListadoLibros);
let Socio3: Socio = new Socio ('Belen', 'Fernandez', 39554846, ListadoLibros);
let ListadoSocios: Socio[] = [];


let BibliotecaNueva : Biblioteca = new Biblioteca (ListadoLibros, ListadoSocios, 'Biblioteca "Manuel Belgrano".');

BibliotecaNueva.anotarLibro(Libro1);
BibliotecaNueva.anotarLibro(Libro2);
BibliotecaNueva.anotarLibro(Libro3);
BibliotecaNueva.anotarLibro(Libro4);
BibliotecaNueva.anotarLibro(Libro5);
BibliotecaNueva.anotarSocio(Socio1);
BibliotecaNueva.anotarSocio(Socio2);
BibliotecaNueva.anotarSocio(Socio3);

BibliotecaNueva.retirarLibro(Libro1);


// AL ELIMINAR EL LIBRO 1 YA NO SE ENCUENTRA EN EL ARR. => LafunciónqueMásmecosto.
BibliotecaNueva.consultarLibro(Libro1);