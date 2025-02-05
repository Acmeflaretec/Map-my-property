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
    { name: "imageGallery", maxCount: 10 },
    { name: "floorPlans", maxCount: 10 },
    { name: "reviews", maxCount: 10 },
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
    { name: "imageGallery", maxCount: 10 },
    { name: "floorPlans", maxCount: 10 },
    { name: "reviews", maxCount: 10 },
  ]),
  updateProject
);
router.get("/", getFilteredProjects);

module.exports = router;
