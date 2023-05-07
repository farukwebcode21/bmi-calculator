// function calculateBMI() {
//   // Get input values
//   const weight = document.getElementById("weightInput").value;
//   const height = document.getElementById("heightInpu").value;

//   // Calculate BMI
//   const bmi = weight / ((height / 100) * (height / 100));

//   // Display result
//   document.getElementById("result").innerHTML = `Your BMI is: ${bmi.toFixed(
//     2
//   )}`;
// }

// const weight = document.getElementById("weightInput").value;
// const height = document.getElementById("heightInpu").value;
// const calculateBtn = document.getElementById("calculateBtn");
// const calculateBMI = () => {
//   const weight = document.getElementById("weightInput").value;
//   const height = document.getElementById("heightInpu").value;
//   const result = weight / ((height / 100) * (height / 100));
//   document.getElementById("result").innerHTML = `Your BMI is:${result.toFixed(
//     2
//   )}`;
//   weight.value = "";
// };

document.getElementById("calculateBtn").addEventListener("click", () => {
  const weight = document.getElementById("weightInput").value;
  const height = document.getElementById("heightInput").value / 100; // Convert cm to meters

  if (weight !== "" && height !== "") {
    const bmi = weight / (height * height);
    document.getElementById("result").textContent =
      "Your BMI is: " + bmi.toFixed(2);
  } else {
    document.getElementById("result").textContent =
      "Please enter both weight and height.";
  }
});


// function multiplicationTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     const product = num * i;
//     console.log(`${num} x ${i} = ${product}`);
//   }
// }

// multiplicationTable(5);
// multiplicationTable(7);
