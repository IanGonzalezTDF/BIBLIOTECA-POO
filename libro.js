"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(paramTitulo, paramAutor, paramTematica, paramDisponible) {
        this.titulo = paramTitulo;
        this.autor = paramAutor;
        this.tematica = paramTematica;
        this.disponible = paramDisponible;
    }
    Libro.prototype.setTitulo = function (paramTitulo) {
        this.titulo = paramTitulo;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setAutor = function (paramAutor) {
        this.autor = paramAutor;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setTematica = function (paramTematica) {
        this.tematica = paramTematica;
    };
    Libro.prototype.getTematica = function () {
        return this.tematica;
    };
    Libro.prototype.setDisponible = function (pDisponible) {
        this.disponible = pDisponible;
    };
    Libro.prototype.getDisponible = function () {
        return this.disponible;
    };
    return Libro;
}());
exports.Libro = Libro;
