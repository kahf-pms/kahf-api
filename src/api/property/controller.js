const GenericRepository = require("../../repository");
const { Property } = require("./model");

const repo = new GenericRepository(Property);

const getProperties = async (_req, res) => {
	try {
		const properties = await repo.findAll();
		res.json(properties);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const getPropertyById = async (req, res) => {
	try {
		const { id } = req.params;

		const property = await repo.findById(id);
		if (!property) {
			return res.status(404).json("Property not found.");
		}

		res.json(property);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const addProperty = async (req, res) => {
	try {
		const propertyData = req.body;

		const property = await repo.create(propertyData);
		res.json(property);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const updatePropertyById = async (req, res) => {
	try {
		const { id } = req.params;
		const newData = req.body;

		const property = await repo.findById(id);
		if (!property) {
			return res.status(404).json("Property not found.");
		}

		const updatedProperty = await repo.updateById(id, newData);
		res.json(updatedProperty);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const deleteProperty = async (req, res) => {
	try {
		const { id } = req.params;

		const property = await repo.findById(id);
		if (!property) {
			return res.status(404).json("Property not found.");
		}

		await repo.deleteById(id);
		res.json(id);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

module.exports = {
	getProperties,
	getPropertyById,
	addProperty,
	updatePropertyById,
	deleteProperty,
};
