import { Router } from 'express';
import blockController from './controllers/BlockController';
import ClassController from './controllers/ClassController';
import CourseController from './controllers/CourseController';

const routes = Router();

routes.post('/courses', CourseController.store);
routes.get('/courses', CourseController.index);

routes.get('/courses/class/:course_id', ClassController.index);

routes.post('/courses/:id/class', ClassController.store);

routes.post('/courses/class/:id/block', blockController.store);
routes.get('/courses/class/:class_id/block', blockController.index);

routes.get('/courses/class/:class_id/block/:block_id', blockController.controllsBlock);
routes.get('/courses/class/block/:block_id/content', blockController.show);

export default routes;