"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline/promises");
var process_1 = require("process");
// Crear la interfaz de readline
var rl = readline.createInterface({ input: process_1.stdin, output: process_1.stdout });
// Validadores
var validarNumero = function (numero) { return __awaiter(void 0, void 0, void 0, function () {
    var num;
    return __generator(this, function (_a) {
        num = Number(numero);
        if (isNaN(num) || numero.trim() === '') {
            throw new Error('Debes ingresar un número válido');
        }
        if (num < 0 || num > 120) {
            throw new Error('La edad debe estar entre 0 y 120 años');
        }
        return [2 /*return*/, num];
    });
}); };
var validarTexto = function (texto) { return __awaiter(void 0, void 0, void 0, function () {
    var textoLimpio;
    return __generator(this, function (_a) {
        textoLimpio = texto.trim();
        if (textoLimpio.length === 0) {
            throw new Error('El texto no puede estar vacío');
        }
        return [2 /*return*/, textoLimpio];
    });
}); };
// Función genérica para obtener entrada válida
var obtenerEntradaValida = function (mensaje, validador) { return __awaiter(void 0, void 0, void 0, function () {
    var entrada, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 6];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, rl.question(mensaje)];
            case 2:
                entrada = _a.sent();
                return [4 /*yield*/, validador(entrada)];
            case 3: return [2 /*return*/, _a.sent()];
            case 4:
                error_1 = _a.sent();
                if (error_1 instanceof Error) {
                    console.log("Error: ".concat(error_1.message));
                }
                else {
                    console.log('Error desconocido durante la validación');
                }
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 0];
            case 6: return [2 /*return*/];
        }
    });
}); };
// Función principal
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var userData, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, 4, 5]);
                _a = {};
                return [4 /*yield*/, obtenerEntradaValida('Por favor, ingresa tu nombre: ', validarTexto)];
            case 1:
                _a.nombre = _b.sent();
                return [4 /*yield*/, obtenerEntradaValida('Por favor, ingresa tu edad: ', validarNumero)];
            case 2:
                userData = (_a.edad = _b.sent(),
                    _a);
                console.log('\nDatos ingresados:');
                console.log("Nombre: ".concat(userData.nombre));
                console.log("Edad: ".concat(userData.edad, " a\u00F1os"));
                return [3 /*break*/, 5];
            case 3:
                error_2 = _b.sent();
                if (error_2 instanceof Error) {
                    console.error('Error inesperado:', error_2.message);
                }
                else {
                    console.error('Error desconocido');
                }
                return [3 /*break*/, 5];
            case 4:
                rl.close();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
// Ejecutar el programa
main().catch(function (error) {
    if (error instanceof Error) {
        console.error('Error en la ejecución:', error.message);
    }
    else {
        console.error('Error desconocido en la ejecución');
    }
});
