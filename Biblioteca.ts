//EJERCICIO NUMERO 4 DE LA SLIDE 14-09;

import { Libro } from "./libro";
import { Socio } from "./Socio";


export class Biblioteca {
    protected libros: Libro[];
    protected listadoSocios: Socio[];
    protected nombreBiblioteca: string;

    constructor(paramLibros:Libro[], paramSocios:Socio[], paramNombre:string){
        this.libros = paramLibros;
        this.listadoSocios = paramSocios;
        this.nombreBiblioteca = paramNombre;
    }

    public setNombre(paramNombre:string):void{
        this.nombreBiblioteca = paramNombre;
    }
    public getNombre():string{
        return this.nombreBiblioteca;
    }

    public anotarSocio(paramSocio:Socio):void{
        this.listadoSocios.push(paramSocio);
        console.log(`La persona: ${paramSocio.getNombre()} ${paramSocio.getApellido()}, Documento Nro: ${paramSocio.getDocumento()}, es nuevo Socio/a.`)
    }

    public anotarLibro(paramLibro:Libro):void{
        this.libros.push(paramLibro);
        console.log(`El Libro "${paramLibro.getTitulo()}" a sido añadido a la lista.`);
    }

    public consultarLibro(paramLibro:Libro):void{
        let libroEncontrado: Libro;
        let flag: number = 0;
        for(let i:number=0; i<this.libros.length; i++){
            if(paramLibro == this.libros[i]) {
            libroEncontrado = this.libros[i]
                console.log(`Titulo del libro buscado: ${libroEncontrado.getTitulo()}`)
                flag ++;       
            }
        }
            if (flag === 0) {
                console.log('No se encontro el libro.');
            }
    }

    public retirarLibro(paramLibro:Libro):void{
        for(let i:number=0; i<this.libros.length; i++){
            if(paramLibro == this.libros[i]){ 
                this.libros.splice(i,1);
                console.log(`Se retiró el libro ${paramLibro.getTitulo()}.`);
            }            
        }
    }
}