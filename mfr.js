const isTempBelow = function(element) {
  if (element >= 32) {
    return false;
  }
  return true;
}

const isNoteFound = function(element) {
  if (element === "do") {
    return true;
  }
}

const total = function(sum, element) {
  return sum + element;
}

const removeDuplicate = function(distinctItems, element) {
  if (!distinctItems.includes(element)) {
    distinctItems.push(element);
  }
  return distinctItems;
}

const countColor = function(count, element) {
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

function testReduce() {
  console.log("\n  REDUCE \n");
  display("series of colors of festival ribbons", ["blue", "red", "blue", "yellow", "blue"].reduce(countColor, 0), 3);
  display("constellations from each night", [["Orion", "Leo"],["Taurus"],["Orion", "Gemini"]].flat().reduce(removeDuplicate, []), ["Orion", "Leo", "Taurus", "Gemini"]);
  display("List of bird species", ["sparrow", "crow", "sparrow", "eagle", "crow"].flat().reduce(removeDuplicate, []), ["sparrow", "crow", "eagle"]);
  display("student present in each period", [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]].flat().reduce(removeDuplicate, []), ["Asha", "Ravi", "Neel", "Meera"]);
  display("logs of candy refills", [[5, 3], [2], [4, 1]].flat().reduce(total), 15);
  display("logs runner (no of miles)", [[2, 3, 2], [4], [1, 1]].flat().reduce(total), 13);
  display("paint colors in session", [["blue", "yellow"], ["yellow", "green"] ,["blue"]].flat().reduce(removeDuplicate, []), ["blue", "yellow", "green"]);
}

function testSome() {
  display("choir groups (musical notes)", [["mi", "fa", "so"], ["do", "mi"], ["fa"]].flat().some(isNoteFound), true);
}

function testEvery() {
  display("temperature records below 32", [[22, 23], [25, 24, 22], [29]].flat().every(isTempBelow), true);
}

function testAll() {
  testReduce();
  testSome();
  testEvery();
}

testAll();