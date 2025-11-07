import { Router } from 'express';
import artistasController from '../controllers/artistasController.js';

const router = Router();

// Rotas de Artistas
router.get('/', homeController.index); 
router.get('/:id', homeController.show);
router.post('/', homeController.create);
router.get('/:id', homeController.update);
router.get('/:id', homeController.delete);

export default router;