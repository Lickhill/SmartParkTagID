const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/website1/index.html"));
});

app.get("/display", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/website2/index.html"));
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
	console.log(`QR Generator: http://localhost:${port}`);
	console.log(`Phone Display: http://localhost:${port}/display`);
});
// For Vercel, we need to export the express app
module.exports = app;
