// 01.Declare a variable named euroCities and assign an array of 5 european cities to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable secondCity and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

const secondCity = euroCities[1];

console.log("--------------------------------------------------------");

// 02.Change the first item in the array to "Berlin".

const euroCitiesChange = euroCities.splice(0, 1, "Berlin");

console.log("02: euroCities first item changed to:", euroCities);

console.log("--------------------------------------------------------");

// 03.Print the length of the array euroCities.

console.log("03: The length of the Array is:", euroCities.length);

console.log("--------------------------------------------------------");

//04. Remove the last item of the array euroCities.

const euroRemove = euroCities.pop();

console.log("04: last item removed from euroCities:", euroCities);

console.log("--------------------------------------------------------");

// 05.Use an array method to add "Budapest" to the end of the euroCities array.

const euroAdd = euroCities.push("Budapest");

console.log("05:Item added to the end of array euroCities:", euroCities);

console.log("--------------------------------------------------------");

// 06.Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = ["Seoul", "Bangkok", "Wuhan", "Peking", "Mumbai"];

console.log("--------------------------------------------------------");

// 07.Use a method to combine euroCities and asianCities into one array. Store the result in a variable worldCities.

const worldCities = euroCities.concat(asianCities);
console.log("07: euroCities and asianCities combined:", worldCities);

console.log("--------------------------------------------------------");

// 08.Reverse the order of worldCities.

console.log("08 worldCities reversed", worldCities.reverse());

console.log("--------------------------------------------------------");

// 09.Bonus: Remove the third item from the euroCities array.

const euroCitiesRemove = euroCities.splice(2, 1);

console.log("09: Third item removed from euroCities", euroCities);

console.log("--------------------------------------------------------");

// 10.Bonus: Use an array method to select items 2 to 4 from the array of asianCities and store this in another variable.

const asianCitiesSelect = asianCities.slice(1, 2);
const asianCitiesSelect1 = asianCities.slice(3, 4);

console.log(
  `10: the 2nd and fourth items of asianCities are:${asianCitiesSelect} and ${asianCitiesSelect1}.`
);

console.log("--------------------------------------------------------");

//11. Bonus: Replace the 3rd item in the array of worldCities with "Toronto".

const worldCitiesReplace = worldCities.splice(2, 1, "Toronto");

console.log("11:Third item replaced in worldCities", worldCities);

console.log("--------------------------------------------------------");

// 12.Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

const worldCitiesAdd = worldCities.splice(1, 0, "Washington");
console.log("12: Adding to 2nd position worldCities:", worldCities);

console.log("--------------------------------------------------------");

// 13.Bonus Write a program to join all elements of the result (`worldCities) into a string.

const worldCitiesString = worldCities.join();
console.log("13:worldCities as a String: ", worldCitiesString);

console.log("----------------------BONUS----------------------------------");

// 01.Write a program to reverse the string: "Hello World".

const stringHello = "Hello World";
const stringSplit = stringHello.split("");
const stringReverse = stringSplit.reverse();
console.log("01: String- Hello World reversed", stringReverse);

console.log("----------------------BONUS----------------------------------");

// Make an array of your siblings' names or your favorite movie characters' names.
// Make an array of your parents' names.
// Combine these two arrays.
// Add your pets' names.
// Reverse the order of the array.
// Access one of your parents' names.
// Update the name of one of your parents.

const siblingsNames = ["Lancelot", "Mardian", "Sherifa", "Chris"];
console.log("2a:", siblingsNames);

const parentsNames = ["Patricia", "Errol"];
console.log("2b:", parentsNames);

const familyCombined = siblingsNames.concat(parentsNames);
console.log("2c:", familyCombined);

const pet = ["Sheila"];
const familyCombinedPet = familyCombined.concat(pet);
console.log("2d;", familyCombinedPet);

console.log("2e:", familyCombinedPet.reverse());

console.log("2f One of my parents name is:", familyCombinedPet.slice(1, 2));

const motherUpdate = familyCombinedPet.splice(2, 1, "Patsy");
console.log(
  "2g Update my mother's name from Patricia to Patsy",
  familyCombinedPet
);
