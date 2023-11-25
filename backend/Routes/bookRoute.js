import express from "express";
import {
  createBook,
  findBook,
  oneBook,
  updateBook,
  deleteBook,
} from "../Controller/bookController.js";

const router = express.Router();

router.route("/").post(createBook).get(findBook);
router.route("/:id").get(oneBook).patch(updateBook).delete(deleteBook);

export default router;
