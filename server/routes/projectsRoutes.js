const { Router } = require('express');
const router = Router();
const authorization = require("../middlewares/authorization");
const { addprojects,deleteprojects, getprojectsById, updateprojects,getAdminprojects,getSelectprojects,
 } = require('../controllers/projectsController');    
const { upload } = require('../middlewares/multer');
// router.post('/', upload.array('images', 10), addprojects);
router.post('/', upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'masterPlan', maxCount: 1 },
    { name: 'imageGallery', maxCount: 10 },
    { name: 'floorPlans', maxCount: 10 },
    { name: 'reviews', maxCount: 10 }
  ]), addprojects);
router.get('/adminProjects', getAdminprojects);
router.delete('/:id',  deleteprojects);
router.get('/:id', getprojectsById);
router.patch('/', upload.array('images', 10), updateprojects);  
router.get('/', getSelectprojects); 

module.exports = router;
