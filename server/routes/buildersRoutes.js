const { Router } = require("express");
const router = Router();
const {
  addBuilder,
  deleteBuilder,
  getBuilderById,
  updateBuilder,
  getAdminBuilders,
  getSelectBuilders,
  getBuilderByUrl,
} = require("../controllers/buildersController");
const { upload } = require("../middlewares/multer");

router.post(
  "/",
  upload.fields([
    { name: "images", maxCount: 1 },
    { name: "logo", maxCount: 1 },
    { name: "reviews", maxCount: 10 },
  ]),
  addBuilder
);
router.get("/adminBuilders", getAdminBuilders);
router.delete("/:id", deleteBuilder);
router.get("/url/:id", getBuilderByUrl);
router.get("/:id", getBuilderById);
router.patch(
  "/",
  upload.fields([
    { name: "images", maxCount: 1 },
    { name: "logo", maxCount: 1 },
    { name: "reviews", maxCount: 10 },
  ]),
  updateBuilder
);
router.get("/", getSelectBuilders);

module.exports = router;
