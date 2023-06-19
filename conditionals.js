const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
let age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}



let age = 15
let whichSchool = ""

if (age < 13)  {
  whichSchool = "elementary";
} else if (age >= 13 && age <= 18) {
  whichSchool = "Secondary School";
} else if (age > 18) {
  whichSchool = "Lighthouse labs";
  
}

console.log("At " + age + ", you should go to " + whichSchool + "!");
