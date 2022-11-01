export class Libro {
    private titulo:string;
    private autor: string;
    private tematica: string;
    protected disponible: boolean;
    constructor (paramTitulo: string, paramAutor:string, paramTematica:string, paramDisponible:boolean){
        this.titulo = paramTitulo;
        this.autor = paramAutor;
        this.tematica = paramTematica;
        this.disponible = paramDisponible;
    }

    public setTitulo(paramTitulo:string):void{
        this.titulo = paramTitulo;
    }
    public getTitulo():string{
        return this.titulo;
    }

    public setAutor(paramAutor:string){
        this.autor = paramAutor;
    }

    public getAutor():string{
        return this.autor;
    }

    public setTematica(paramTematica:string){
        this.tematica = paramTematica;
    }

    public getTematica():string{
        return this.tematica;
    }

    public setDisponible (pDisponible:boolean):void{
        this.disponible = pDisponible;
    }

    public getDisponible ():boolean{
        return this.disponible;
    }

}

