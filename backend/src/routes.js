const express = require('express');
const routes = express.Router();

const {
  createAnnotation,
} = require('./controllers/AnnotationController/CreateAnnotation');
const {
  DeleteAnnotation,
} = require('./controllers/AnnotationController/DeleteAnnotation');
const {
  GetAllAnnotation,
} = require('./controllers/AnnotationController/GetAllAnnotation');
const {
  UpdateAnnotation,
} = require('./controllers/AnnotationController/UpdateAnnotation');
const {
  GetPriority,
} = require('./controllers/AnnotationController/GetPriority');
const {
  PriorityUpdateController,
} = require('./controllers/AnnotationController/PriorityUpdateController');

routes.post('/annotations', createAnnotation);
routes.get('/allannotations', GetAllAnnotation);
routes.delete('/annotations/:id', DeleteAnnotation);
routes.put('/UpdateAnnotation/:id', UpdateAnnotation);

routes.get('/priorities', GetPriority);
routes.put('/priorities/:id', PriorityUpdateController);

module.exports = routes;
