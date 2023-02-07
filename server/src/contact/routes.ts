const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getContacts);
router.get("/:id", controller.getContactById);

export { router };
