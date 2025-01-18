const { Router } = require('express');
const router = Router();
const { getBlogs, addBlog, updateBlog, deleteBlog, getBlogById,updateBlogBanner,} = require('../controllers/blogController');
const { upload } = require('../middlewares/multer');

router.get('/', getBlogs);
router.get('/:id', getBlogById);      
router.post('/', upload.single('image'), addBlog);
router.patch('/', upload.single('image'), updateBlog);
router.delete('/:id', deleteBlog);
router.put('/:id/setBanner', updateBlogBanner);



module.exports = router;
