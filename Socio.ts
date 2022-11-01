import { Libro } from "./libro";

export class Socio {
    protected nombre:string;
    protected apellido: string;
    protected documento: number;
    protected libros: Libro[];

    constructor (paramNombre:string, paramApellido:string, paramDocument:number, listadoLibros:Libro[]){
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.documento = paramDocument;
        this.libros = listadoLibros;
    }

    public setNombre(paramNombre:string):void{
        this.nombre = paramNombre;
    }
    public getNombre():string{
        return this.nombre;
    }
    public setApellido(paramApellido:string):void{
        this.apellido = paramApellido;
    }
    public getApellido():string{
        return this.apellido;
    }
    public setDocumento(paramDocument:number):void{
        this.documento = paramDocument;
    }
    public getDocumento():number{
        return this.documento
    }
};