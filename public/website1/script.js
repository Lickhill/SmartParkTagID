function generateQR() {
	const phoneNumber = document.getElementById("phoneNumber").value;
	if (!phoneNumber) {
		alert("Please enter a phone number");
		return;
	}

	// Clear previous QR code
	document.getElementById("qrcode").innerHTML = "";

	// Create URL for website2
	const url = `http://localhost:3000/display?phone=${encodeURIComponent(
		phoneNumber
	)}`;

	// Generate QR code
	new QRCode(document.getElementById("qrcode"), {
		text: url,
		width: 200,
		height: 200,
	});
}
