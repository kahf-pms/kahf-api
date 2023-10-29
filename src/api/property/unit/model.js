const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			default: "1",
		},
		beds: {
			type: Number,
			default: 1,
		},
		baths: {
			type: Number,
			default: 1,
		},
	},
	{
		timestamps: true,
	}
);

const Unit = mongoose.model("Unit", unitSchema);

module.exports = {
	unitSchema,
	Unit,
};
