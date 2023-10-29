const mongoose = require("mongoose");
const { unitSchema } = require("./unit/model");

const propertySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		type: {
			type: String,
			enum: ["Single Family", "Duplex", "Multi Family"],
			default: "Single Family",
		},
		address: {
			street: {
				type: String,
			},
			city: {
				type: String,
			},
			state: {
				type: String,
			},
			country: {
				type: String,
			},
			zipcode: {
				type: String,
			},
		},
		size: {
			type: Number,
		},
		yearBult: {
			type: Number,
		},
		purchaseDate: {
			type: Date,
		},
		purchasePrice: {
			type: Number,
		},
		units: [unitSchema],
	},
	{
		timestamps: true,
	}
);

const Property = mongoose.model("Property", propertySchema);

module.exports = {
	propertySchema,
	Property,
};
