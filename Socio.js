"use strict";
exports.__esModule = true;
exports.Socio = void 0;
var Socio = /** @class */ (function () {
    function Socio(paramNombre, paramApellido, paramDocument, listadoLibros) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.documento = paramDocument;
        this.libros = listadoLibros;
    }
    Socio.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Socio.prototype.getNombre = function () {
        return this.nombre;
    };
    Socio.prototype.setApellido = function (paramApellido) {
        this.apellido = paramApellido;
    };
    Socio.prototype.getApellido = function () {
        return this.apellido;
    };
    Socio.prototype.setDocumento = function (paramDocument) {
        this.documento = paramDocument;
    };
    Socio.prototype.getDocumento = function () {
        return this.documento;
    };
    return Socio;
}());
exports.Socio = Socio;
;
