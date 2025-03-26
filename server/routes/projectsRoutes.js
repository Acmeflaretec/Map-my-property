const { Router } = require("express");
const router = Router();
const {
  addProject,
  deleteProject,
  getProjectById,
  updateProject,
  getAdminProjects,
  getSelectProjects,
  getFilteredProjects,
  getProjectByUrl,
} = require("../controllers/projectsController");
const { upload } = require("../middlewares/multer");

router.post(
  "/",
  upload.fields([
    { name: "masterPlan", maxCount: 1 },
    { name: "imageGallery", maxCount: 50 },
    { name: "floorPlans", maxCount: 50 },
    { name: "reviews", maxCount: 50 },
  ]),
  addProject
);
router.get("/adminProjects", getAdminProjects);
router.delete("/:id", deleteProject);
router.get("/listingProjects", getSelectProjects);
router.get("/url/:url", getProjectByUrl);
router.get("/:id", getProjectById);
router.patch(
  "/",
  upload.fields([
    { name: "masterPlan", maxCount: 1 },
    { name: "imageGallery", maxCount: 50 },
    { name: "floorPlans", maxCount: 50 },
    { name: "reviews", maxCount: 50 },
  ]),
  updateProject
);
router.get("/", getFilteredProjects);

module.exports = router;
