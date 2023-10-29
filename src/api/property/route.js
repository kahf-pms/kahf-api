const {
	getProperties,
	addProperty,
	deleteProperty,
	updatePropertyById,
	getPropertyById,
} = require("./controller");

const router = require("express").Router();

router.get("/", getProperties);
router.get("/:id", getPropertyById);
router.post("/", addProperty);
router.put("/:id", updatePropertyById);
router.delete("/:id", deleteProperty);

router.use("/:propertyId/units", require("./unit"));

module.exports = router;
