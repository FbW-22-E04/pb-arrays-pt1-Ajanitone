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

console.log(
  "------------------------------ ALKIS EXCERCISES----------------------------------------"
);

/**
 * 01 easy
 * Crate an array named myLuckyNumbers with the following numbers: 1,2,3,4,5,6,7,8,9,10
 * Create a program that sums all the numbers of the array
 */

const myLuckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number1 = myLuckyNumbers[0];
const number2 = myLuckyNumbers[1];
const number3 = myLuckyNumbers[2];
const number4 = myLuckyNumbers[3];
const number5 = myLuckyNumbers[4];
const number6 = myLuckyNumbers[5];
const number7 = myLuckyNumbers[6];
const number8 = myLuckyNumbers[7];
const number9 = myLuckyNumbers[8];
const number10 = myLuckyNumbers[9];

const numberSum =
  number1 + number2 + number3 + number5 + number6 + number7 + number8 + number9;

console.log("01: The sum of the numbers in myLuckyNumbers is:", numberSum);
console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);

/**
 * 02 easy
 * Write a program that given 2 values prints these values in an array.
 * Example: with 5,9 should print the array [5, 9]
 */

console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);

const valueArray = [5, 9];
console.log("02", valueArray);

console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);

// * 03 easy
// * Write a program that given an array prints the first element of the array.
// * Example: from array [1, 2] should print 1
// */

const valueArray1 = [1, 2];
console.log("03: The first element is ", valueArray1[0]);

console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);

/**
 * 04 easy
 * Write a program with given an array and a variable and
 * set the first element of the array with the variable and print the array
 */

const someArray = ["Sweet"];
console.log("04: The array is", someArray);

console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);

/**
 * 05 easy
 * Write a program that prints the last element of a given array
 *
 */

const someThings = ["Jeans", "T-shirts", "Pants", "Shoes", "Dresses"];
console.log("05:The last element of someThings is ", someThings.pop());

console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);
/**
 * 06 easy
 * Write a program with given an array and a variable. The program should
 * add the variable to the end of the array and then print the array
 */

const sesameStreet = ["Ernie", "Bert"];
const variable = ["Big Bird"];
const sesameStreetVar = sesameStreet.concat(variable);
console.log("06:Array with variable at the end", sesameStreetVar);
console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);
/**
 * 07 easy - medium
 * Write a program that adds an element to the end of an array.
 * However, the element should only be added if it is not already in the array.
 * Example: In array [1, 2] 3 could be added and become [1, 2, 3] and 2 should not be added.
 * Print the array at the end
 */
const progRam = [1, 2];

const progAdd = progRam.includes(3) ? "Do nothing" : progRam.splice(2, 0, 3);

console.log(
  "07: Adding number 3 to the array while checking if itś included first",
  progRam
);

console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);

/**
 * 08 medium
 * Write a program that prints a string from an array of words
 * by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 * Example: ['Huey', 'Dewey', 'Louie'] should print 'Huey, Dewey and Louie'
 */

const namesFirst = ["Sonny", "Don", "Camilo", "Bob", "Jimmy"];

const namesStringAdd = namesFirst.splice(4, 0, "and");
const namesString = namesFirst.join();

console.log("08:Array printed as namesString", namesString);

console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);

/**
 * 09 easy
 * Write a program to print the X first elements of an array.
 * Example: from array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] the program should be able to print the first 5 [1, 2, 3, 4 , 5]
 */

const rayRay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const xRay = rayRay.slice(0, 5);
console.log("09:The first 5 elements are:", xRay);

console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);

/**
 * 10 medium
 * Write a program with given a string of digits and inserts dashes (-)
 * between each two even numbers.
 * For example if the string is 025468 the output should be 0-254-6-8
 * The program should print the string output
 */
const digiString = "025468";
const digiNumberArray = digiString.split("").map(Number);
const endResult = [digiNumberArray[0]];

for (let i = 1; i < digiNumberArray.length; i++) {
  if (digiNumberArray[i - 1] % 2 === 0 && digiNumberArray[i] % 2 === 0) {
    endResult.push("-", digiNumberArray[i]);
  } else {
    endResult.push(digiNumberArray[i]);
  }
}
console.log("10 the result is", endResult.join(""));

console.log(
  "---------------------------ALKis EXERCISES---------------------------------------"
);

/**
 * 11 medium
 * Write a program which has an array and strips from it all items that begin from 'a'
 * E.g. the array ['banana','orange', 'apple'] should become ['banana','orange']
 */

const oneArray = ["orange", "banana", "apple"];

const oneArray1 = oneArray[0];
const oneArray2 = oneArray[1];
const oneArray3 = oneArray[2];
const arraySub =
  oneArray1[0] === "a" && oneArray2 === "a" && oneArray3 === "a"
    ? "yes"
    : oneArray.slice(0, 2);
console.log("11.", arraySub);
