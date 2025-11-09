// 96. Build a frequency list for musical notes practiced in a session.

const frequency = function (frquencyTable, element) {
  switch (element) {
    case "mi": ++frquencyTable[0][1];
    return frquencyTable;
    case "fa": ++frquencyTable[1][1];
    return frquencyTable;
    case "so": ++frquencyTable[2][1];
    return frquencyTable;
    case "do": ++frquencyTable[3][1];
    return frquencyTable;
  }
}

console.log([["mi", "fa", "so"], ["do", "mi"], ["fa"]].flatMap(x => x).reduce(frequency, [["mi", 0], ["fa", 0], ["so", 0], ["do", 0]]).join("\n"));

const countBook = function (count, element) {
  if (element === "Dune") {
    count++;
  }
  return count;
}

const isNoteFound = (element) => element === "do";

const total = function (sum, element) {
  return sum + element;
}

const removeDuplicate = function (distinctItems, element) {
  if (!distinctItems.includes(element)) {
    distinctItems.push(element);
  }
  return distinctItems;
}

const countColor = function (count, element) {
  if (element === "blue") {
    count++;
  }
  return count;
}

function symbol(expectedValue, actualValue) {
  return `${expectedValue}` === `${actualValue}` ? "✅" : "❌";
}

function composeMessage(expected, actual, gist) {
  const emoji = symbol(expected, actual);
  let message = emoji + "  " + gist;
  if (emoji === "❌") {
    const expectedPart = "\n\t| expected : " + expected;
    const actualPart = "\n\t| actual : " + actual;
    message = message + expectedPart + actualPart;
  }
  return message;
}

function display(gist, actual, expected) {
  console.log(composeMessage(expected, actual, gist));
}

function testRemoveDuplicate() {
  console.log("\n  REMOVE DUPLICATE \n");
  display("constellations from each night", [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flatMap(x => x).reduce(removeDuplicate, []), ["Orion", "Leo", "Taurus", "Gemini"]);
  display("List of bird species", ["sparrow", "crow", "sparrow", "eagle", "crow"].flatMap(x => x).reduce(removeDuplicate, []), ["sparrow", "crow", "eagle"]);
  display("student present in each period", [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]].flatMap(x => x).reduce(removeDuplicate, []), ["Asha", "Ravi", "Neel", "Meera"]);
  display("paint colors in session", [["blue", "yellow"], ["yellow", "green"], ["blue"]].flatMap(x => x).reduce(removeDuplicate, []), ["blue", "yellow", "green"]);
  display("List of lunch box Ingredients", [["rice", "lentils"], ["rice"], ["curd", "lentils"]].flatMap(x => x).reduce(removeDuplicate, []), ["rice", "lentils", "curd"]);
}

function testReduce() {
  display("series of colors of festival ribbons", ["blue", "red", "blue", "yellow", "blue"].reduce(countColor, 0), 3);
  display("series of books returned", ["Dune", "Dune", "Foundation", "Dune"].reduce(countBook, 0), 3);
  display("logs runner (no of miles)", [[2, 3, 2], [4], [1, 1]].flatMap(x => x).reduce(total), 13);
  display("logs of candy refills", [[5, 3], [2], [4, 1]].flatMap(x => x).reduce(total), 15);
}

function testSome() {
  console.log("\n  SOME \n");
  display("choir groups (musical notes)", [["mi", "fa", "so"], ["do", "mi"], ["fa"]].flatMap(x => x).some(isNoteFound), true);
}

function testEvery() {
  console.log("\n  EVERY \n");
  display("temperature records below 32", [[22, 23], [25, 24, 22], [29]].flatMap(x => x).every((x) => x < 32), true);
}

function testAll() {
  testReduce();
  testSome();
  testEvery();
}

testAll();
