```javascript
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const form = document.getElementById("predictionForm");
    const resultCard = document.getElementById("resultCard");

    const predictButton =
        document.getElementById("predictButton") ||
        (form
            ? form.querySelector(
                'button[type="submit"], input[type="submit"]'
            )
            : null);

    if (!form || !resultCard || !predictButton) {
        console.error(
            "BuildAI: predictionForm, resultCard, or predictButton missing."
        );
        return;
    }

    let currentChart = null;
    const originalButtonHTML = predictButton.innerHTML;

    let messageBox = document.getElementById("predictionMessage");

    if (!messageBox) {
        messageBox = document.createElement("div");
        messageBox.id = "predictionMessage";
        messageBox.className = "alert";
        messageBox.style.display = "none";
        form.prepend(messageBox);
    }

    function showMessage(message, type = "danger") {
        messageBox.className = "alert alert-" + type + " mt-3";
        messageBox.textContent = message;
        messageBox.style.display = "block";
    }

    function hideMessage() {
        messageBox.style.display = "none";
        messageBox.textContent = "";
    }

    function setText(id, value) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent =
                value === null || value === undefined ? "" : value;
        }
    }

    function getValue(id) {
        const element = document.getElementById(id);
        return element ? String(element.value || "").trim() : "";
    }

    function getNumber(id, label) {
        const value = getValue(id);

        if (value === "") {
            throw new Error(label + " is required.");
        }

        const number = Number(value);

        if (!Number.isFinite(number)) {
            throw new Error("Please enter a valid " + label + ".");
        }

        return number;
    }

    function formatINR(value) {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2
        }).format(value);
    }

    function drawChart(totalCost) {
        const canvas = document.getElementById("pieChart");

        if (!canvas || typeof Chart === "undefined") {
            return;
        }

        if (currentChart) {
            currentChart.destroy();
            currentChart = null;
        }

        const oldChart = Chart.getChart(canvas);

        if (oldChart) {
            oldChart.destroy();
        }

        // Illustrative distribution only; these are not model outputs.
        const values = [
            totalCost * 0.16,
            totalCost * 0.25,
            totalCost * 0.10,
            totalCost * 0.08,
            totalCost * 0.41
        ];

        currentChart = new Chart(canvas, {
            type: "pie",
            data: {
                labels: [
                    "Cement (estimated share)",
                    "Steel (estimated share)",
                    "Sand (estimated share)",
                    "Bricks (estimated share)",
                    "Labour & Other (estimated share)"
                ],
                datasets: [{
                    data: values,
                    backgroundColor: [
                        "#2459c4",
                        "#ed8b23",
                        "#29a36a",
                        "#a45bd4",
                        "#8795a8"
                    ],
                    borderColor: "#ffffff",
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: "bottom"
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return context.label + ": " +
                                    formatINR(Number(context.raw));
                            }
                        }
                    }
                }
            }
        });
    }

    function displayPrediction(data, input) {
        const totalCost = Number(data.predicted_cost);

        if (!Number.isFinite(totalCost) || totalCost < 0) {
            throw new Error(
                "The server returned an invalid construction cost."
            );
        }

        setText("predictedCost", formatINR(totalCost));
        setText("showProjectName", data.project_name || input.project_name);
        setText("showLocation", data.location || input.location);

        setText(
            "showArea",
            Number(data.area ?? input.area).toLocaleString("en-IN") +
                " Sq.ft"
        );

        setText("showFloor", data.floors ?? input.floors);

        // These values are illustrative shares, not separate ML predictions.
        const shares = [0.16, 0.25, 0.10, 0.08, 0.41];

        const costFields = [
            "cementCost",
            "steelCost",
            "sandCost",
            "brickCost",
            "labourCost"
        ];

        costFields.forEach(function (id, index) {
            setText(id, formatINR(totalCost * shares[index]));
        });

        setText(
            "recommendationBox",
            "This is a machine-learning-based estimate. The material and " +
            "labour breakdown shown here is illustrative only. Confirm " +
            "actual material rates and site conditions with a professional."
        );

        const confidenceBar = document.getElementById("confidenceBar");

        if (confidenceBar) {
            confidenceBar.style.width = "100%";
            confidenceBar.textContent = "Prediction generated";
            confidenceBar.setAttribute("aria-valuenow", "100");
        }

        const constructionTime = document.getElementById("constructionTime");

        if (constructionTime) {
            const months = Math.max(
                1,
                Math.ceil((input.area * input.floors) / 1000)
            );

            setText(
                "constructionTime",
                "Rough planning estimate: " + months +
                " month(s). Actual duration may vary."
            );
        }

        resultCard.hidden = false;
        resultCard.style.display = "block";

        drawChart(totalCost);

        resultCard.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    async function submitPrediction(event) {
        event.preventDefault();
        hideMessage();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        try {
            const projectName = getValue("projectName");
            const location = getValue("location");
            const materialQuality = getValue("materialQuality");

            const area = getNumber("area", "area");
            const floors = getNumber("floors", "number of floors");

            const cement = getNumber("cement", "cement price");
            const steel = getNumber("steel", "steel price");
            const sand = getNumber("sand", "sand price");
            const brick = getNumber("brick", "brick price");

            if (!projectName) {
                throw new Error("Please enter the project name.");
            }

            if (!location) {
                throw new Error("Please enter the project location.");
            }

            if (!materialQuality) {
                throw new Error("Please select material quality.");
            }

            if (area <= 0) {
                throw new Error("Area must be greater than zero.");
            }

            if (!Number.isInteger(floors) || floors <= 0) {
                throw new Error("Floors must be a positive whole number.");
            }

            if ([cement, steel, sand, brick].some(function (value) {
                return value < 0;
            })) {
                throw new Error("Material prices cannot be negative.");
            }

            const input = {
                project_name: projectName,
                location: location,
                area: area,
                floors: floors,
                cement: cement,
                steel: steel,
                sand: sand,
                brick: brick,
                material_quality: materialQuality
            };

            predictButton.disabled = true;
            predictButton.innerHTML =
                '<span class="spinner-border spinner-border-sm me-2"></span>' +
                "Calculating...";

            const response = await fetch("/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                credentials: "same-origin",
                body: JSON.stringify(input)
            });

            let data;

            try {
                data = await response.json();
            } catch (parseError) {
                throw new Error(
                    "Invalid server response. Check the Flask terminal."
                );
            }

            if (response.status === 401) {
                throw new Error(
                    "Your login session has expired. Please log in again."
                );
            }

            if (!response.ok || data.success !== true) {
                throw new Error(
                    data.error ||
                    data.message ||
                    "Prediction failed. Please try again."
                );
            }

            displayPrediction(data, input);

            showMessage(
                "Prediction generated and saved successfully! " +
                "You can check it in History and Reports.",
                "success"
            );

        } catch (error) {
            console.error("BuildAI prediction error:", error);

            showMessage(
                error.message ||
                "Unable to generate prediction. Please try again."
            );

        } finally {
            predictButton.disabled = false;
            predictButton.innerHTML = originalButtonHTML;
        }
    }

    // Support both submit buttons and buttons with type="button".
    form.addEventListener("submit", submitPrediction);

    predictButton.addEventListener("click", function (event) {
        if (predictButton.type === "button") {
            submitPrediction(event);
        }
    });
});
```