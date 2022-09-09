"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const routes_1 = require("../routes");
// // export default class ServerBootstrap {
//Ejemplo de clase anonima
class default_1 {
    initialize() {
        const server = http_1.default.createServer((request, response) => {
            const route = (0, routes_1.getRoute)(request.url);
            if (route) {
                route.execute(request, response);
            }
            else {
                (0, routes_1.exceptionNotFound)(request, response);
            }
        });
        server.listen(3001, () => console.log("Ejecutando en el puerto : 3001"));
    }
}
exports.default = default_1;
//# sourceMappingURL=server.bootstrap.js.map