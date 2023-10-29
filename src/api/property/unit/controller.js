const GenericRepository = require("../../../repository");
const { Property } = require("../model");

const repo = new GenericRepository(Property);

const getUnits = async (req, res) => {
	try {
		const { propertyId } = req.params;

		const { units } = await repo.findSubdocument(propertyId, "units");
		res.json(units);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const getUnitById = async (req, res) => {
	try {
		const { propertyId, unitId } = req.params;

		const unit = await repo.findSubdocumentById(
			propertyId,
			"units",
			unitId
		);
		if (!unit) {
			return res.status(404).json("Unit not found.");
		}

		res.json(unit);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const addUnit = async (req, res) => {
	try {
		const { propertyId } = req.params;
		const unitData = req.body;

		const unit = await repo.createSubdocument(
			propertyId,
			"units",
			unitData
		);
		res.json(unit);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const updateUnitById = async (req, res) => {
	try {
		const { propertyId, unitId } = req.params;
		const newData = req.body;

		const updatedUnit = await repo.updateSubdocument(
			propertyId,
			"units",
			unitId,
			newData
		);
		if (!updatedUnit) {
			return res.status(404).json("Unit not found");
		}

		res.json(updatedUnit);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const deleteUnit = async (req, res) => {
	try {
		const { propertyId, unitId } = req.params;

		await repo.deleteSubdocument(propertyId, "units", unitId);
		res.json(unitId);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

module.exports = {
	getUnits,
	getUnitById,
	addUnit,
	updateUnitById,
	deleteUnit,
};
