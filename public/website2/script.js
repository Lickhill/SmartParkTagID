document.addEventListener("DOMContentLoaded", function () {
	const urlParams = new URLSearchParams(window.location.search);
	const phoneNumber = urlParams.get("phone");
	const button = document.getElementById("phoneButton");
	const phoneLink = document.getElementById("phoneLink");

	// Version without localStorage
	let clickCount = 0;
	let lastReset = Date.now();

	const now = Date.now();
	if (now - lastReset >= 24 * 60 * 60 * 1000) {
		clickCount = 0;
		lastReset = now;
	}

	if (phoneNumber) {
		phoneLink.href = `tel:${phoneNumber}`;
		button.textContent = "Call Now";

		if (clickCount >= 4) {
			button.disabled = true;
			button.textContent = "Daily limit reached";
		}

		button.addEventListener("click", function () {
			if (clickCount < 4) {
				clickCount++;
				if (clickCount >= 4) {
					button.disabled = true;
					button.textContent = "Daily limit reached";
				}
			}
		});
	} else {
		button.textContent = "No phone number found";
		button.disabled = true;
	}

	/* Version with localStorage
    if (!localStorage.getItem("clickCount")) {
        localStorage.setItem("clickCount", "0");
        localStorage.setItem("lastReset", Date.now().toString());
    }

    const lastReset = parseInt(localStorage.getItem("lastReset"));
    const now = Date.now();
    if (now - lastReset >= 24 * 60 * 60 * 1000) {
        localStorage.setItem("clickCount", "0");
        localStorage.setItem("lastReset", now.toString());
    }

    const clickCount = parseInt(localStorage.getItem("clickCount"));

    if (phoneNumber) {
        phoneLink.href = `tel:${phoneNumber}`;
        button.textContent = "Call Now";

        if (clickCount >= 4) {
            button.disabled = true;
            button.textContent = "Daily limit reached";
        }

        button.addEventListener("click", function () {
            const currentClicks = parseInt(localStorage.getItem("clickCount"));
            if (currentClicks < 4) {
                localStorage.setItem(
                    "clickCount",
                    (currentClicks + 1).toString()
                );
                if (currentClicks + 1 >= 4) {
                    button.disabled = true;
                    button.textContent = "Daily limit reached";
                }
            }
        });
    } else {
        button.textContent = "No phone number found";
        button.disabled = true;
    }
    */
});
