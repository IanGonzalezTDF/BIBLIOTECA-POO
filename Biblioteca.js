"use strict";
//EJERCICIO NUMERO 4 DE LA SLIDE 14-09;
exports.__esModule = true;
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca(paramLibros, paramSocios, paramNombre) {
        this.libros = paramLibros;
        this.listadoSocios = paramSocios;
        this.nombreBiblioteca = paramNombre;
    }
    Biblioteca.prototype.setNombre = function (paramNombre) {
        this.nombreBiblioteca = paramNombre;
    };
    Biblioteca.prototype.getNombre = function () {
        return this.nombreBiblioteca;
    };
    Biblioteca.prototype.anotarSocio = function (paramSocio) {
        this.listadoSocios.push(paramSocio);
        console.log("La persona: ".concat(paramSocio.getNombre(), " ").concat(paramSocio.getApellido(), ", Documento Nro: ").concat(paramSocio.getDocumento(), ", es nuevo Socio/a."));
    };
    Biblioteca.prototype.anotarLibro = function (paramLibro) {
        this.libros.push(paramLibro);
        console.log("El Libro \"".concat(paramLibro.getTitulo(), "\" a sido a\u00F1adido a la lista."));
    };
    Biblioteca.prototype.consultarLibro = function (paramLibro) {
        var libroEncontrado;
        var flag = 0;
        for (var i = 0; i < this.libros.length; i++) {
            if (paramLibro == this.libros[i]) {
                libroEncontrado = this.libros[i];
                console.log("Titulo del libro buscado: ".concat(libroEncontrado.getTitulo()));
                flag++;
            }
        }
        if (flag === 0) {
            console.log('No se encontro el libro.');
        }
    };
    Biblioteca.prototype.retirarLibro = function (paramLibro) {
        for (var i = 0; i < this.libros.length; i++) {
            if (paramLibro == this.libros[i]) {
                this.libros.splice(i, 1);
                console.log("Se retir\u00F3 el libro ".concat(paramLibro.getTitulo(), "."));
            }
        }
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
