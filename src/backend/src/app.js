const express = require('express');

import homeRoutes from './routes/homeRoutes.js';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express. json());
    }
    routes() {
        this.app.use('/', homeRoutes); // Rotas de Início
    }
}


export default new App();       