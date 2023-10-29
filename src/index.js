const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
require("dotenv").config();
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");

const PORT = process.env.PORT || 3000;
const app = express();
connectDb();

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());

app.use("/", require("./api/health"));
app.use("/properties", require("./api/property"));

app.use((err, _req, res, _next) => {
	res.status(500).json({ error: "Internal Server Error", details: err });
});

app.listen(PORT, (err) => {
	if (!err) {
		console.log(`Server running on port ${PORT}`);
	} else {
		console.log(`Error occured: ${err}`);
	}
});
