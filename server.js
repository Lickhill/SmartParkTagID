const express = require("express");
const app = express();
const port = 3000;

// Serve static files
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/website1/index.html");
});

app.get("/display", (req, res) => {
	res.sendFile(__dirname + "/public/website2/index.html");
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
	console.log(`QR Generator: http://localhost:${port}`);
	console.log(`Phone Display: http://localhost:${port}/display`);
});
