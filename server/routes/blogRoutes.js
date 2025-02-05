const { Router } = require("express");
const router = Router();
const {
  getBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  updateBlogBanner,
  getBlogByUrl,
} = require("../controllers/blogController");
const { upload } = require("../middlewares/multer");

router.get("/", getBlogs);
router.get("/url/:id", getBlogByUrl);
router.get("/:id", getBlogById);
router.post("/", upload.single("image"), addBlog);
router.patch("/", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);
router.put("/:id/setBanner", updateBlogBanner);

module.exports = router;
