import { Router } from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanage/:id', OrphanagesController.show);
routes.post('/orphanage', upload.array('images'), OrphanagesController.create);
routes.put('/orphanage/:id', OrphanagesController.update);
routes.delete('/orphanage/:id', OrphanagesController.delete);

export default routes;