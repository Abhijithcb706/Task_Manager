const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/auth");

const taskController = require("../controllers/taskController");
router.route("/addTask").post(authenticate,taskController.addTask);
router.route("/getAllTasks").get(authenticate,taskController.getAllTasks);
router.route("/updateTask/:id").put(authenticate,taskController.updateTask);

router
  .route("/deleteTask/:id")
  
  .delete(authenticate,taskController.deleteTask);

module.exports = router;
