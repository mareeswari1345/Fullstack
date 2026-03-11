const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// BMI calculation API
app.post("/calculateBMI", (req, res) => {

    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height) / 100;

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } 
    else if (bmi < 24.9) {
        category = "Normal";
    } 
    else if (bmi < 29.9) {
        category = "Overweight";
    } 
    else {
        category = "Obese";
    }

    res.json({
        bmi: bmi,
        category: category
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});