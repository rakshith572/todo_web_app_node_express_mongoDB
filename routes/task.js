    
const express=require('express');
const routes = express.Router();
const ct=require('../controllers/tasks.js');

routes.route('/').get(ct.getAllTask);
routes.route('/').post(ct.createTask);
routes.route('/:id').get(ct.getTask);
routes.route('/:id').patch(ct.updateTask);
routes.route('/:id').delete(ct.deleteTask);  

module.exports=routes;