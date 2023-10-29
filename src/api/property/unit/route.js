const {
	getUnits,
	addUnit,
	deleteUnit,
	getUnitById,
	updateUnitById,
} = require("./controller");

const router = require("express").Router({ mergeParams: true });

router.get("/", getUnits);
router.get("/:unitId", getUnitById);
router.post("/", addUnit);
router.put("/:unitId", updateUnitById);
router.delete("/:unitId", deleteUnit);

module.exports = router;
