const express = require('express');

import homeRoutes from './routes/homeRoutes.js';
import artistasRoutes from './routes/artistasRoutes.js';

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
        this.app.use('/artistas', artistasRoutes); // Rotas de Artistas
    }
}


export default new App().app;       