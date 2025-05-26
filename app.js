window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi);
};

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height <= 0) {
        result.innerText = "Please provide a valid height greater than zero";
        return;
    } else if (!weight || isNaN(weight) || weight <= 0) {
        result.innerText = "Please provide a valid weight greater than zero";
        return;
    }

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Underweight: ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Overweight: ${bmi}`;
    } else if (bmi >= 30 && bmi < 35) {
        result.innerText = `Obesity (Class 1): ${bmi}`;
    } else if (bmi >= 35 && bmi < 40) {
        result.innerText = `Obesity (Class 2): ${bmi}`;
    } else {
        result.innerText = `Extreme Obesity: ${bmi}`;
    }
}