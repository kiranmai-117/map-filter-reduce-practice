import * as allfn from "./mfr.js";

function symbol(expectedValue, actualValue) {
  return `${expectedValue}` === `${actualValue}` ? "✅" : "❌";
}

function composeMessage(expected, actual, gist) {
  const emoji = symbol(expected, actual);
  let message = emoji + "  " + gist;
  if (emoji === "❌") {
    const expectedPart = "\n\t| expected : " + expected;
    const actualPart = "\n\t| actual : " + `${actual}`;
    console.log("actual", actualPart);
    message = message + expectedPart + actualPart;
  }
  return message;
}

function display(gist, actual, expected) {
  console.log(composeMessage(expected, actual, gist));
}

function testRemoveDuplicate() {
  console.log("\n  REMOVE DUPLICATE \n");
  display(
    "constellations from each night",
    [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flatMap((x) => x)
      .reduce(allfn.removeDuplicate, []),
    ["Orion", "Leo", "Taurus", "Gemini"],
  );

  display(
    "List of bird species",
    ["sparrow", "crow", "sparrow", "eagle", "crow"]
      .flatMap((x) => x)
      .reduce(allfn.removeDuplicate, []),
    ["sparrow", "crow", "eagle"],
  );
  display(
    "student present in each period",
    [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]]
      .flatMap((x) => x)
      .reduce(allfn.removeDuplicate, []),
    ["Asha", "Ravi", "Neel", "Meera"],
  );

  display(
    "paint colors in session",
    [["blue", "yellow"], ["yellow", "green"], ["blue"]]
      .flatMap((x) => x)
      .reduce(allfn.removeDuplicate, []),
    ["blue", "yellow", "green"],
  );

  display(
    "List of lunch box Ingredients",
    [["rice", "lentils"], ["rice"], ["curd", "lentils"]]
      .flatMap((x) => x)
      .reduce(allfn.removeDuplicate, []),
    ["rice", "lentils", "curd"],
  );
}

function testReduce() {
  console.log("\n  REDUCE \n");

  display(
    "logs runner (no of miles)",
    [[2, 3, 2], [4], [1, 1]].flatMap((x) => x).reduce(allfn.total),
    13,
  );

  display(
    "logs of candy refills",
    [[5, 3], [2], [4, 1]].flatMap((x) => x).reduce(allfn.total),
    15,
  );
}

function testCount() {
  console.log("\n  COUNT \n");

  display(
    "series of colors of festival ribbons",
    allfn.countOccurance(["blue", "red", "blue", "yellow", "blue"], "blue"),
    3,
  );

  display(
    "series of books returned",
    allfn.countOccurance(["Dune", "Dune", "Foundation", "Dune"], "Dune"),
    3,
  );
}

function testSome() {
  console.log("\n  SOME \n");
  display(
    "choir groups (musical notes)",
    [["mi", "fa", "so"], ["do", "mi"], ["fa"]].flatMap((x) => x).some(
      allfn.isNoteFound,
    ),
    true,
  );
}

function testEvery() {
  console.log("\n  EVERY \n");
  display(
    "temperature records below 32",
    [[22, 23], [25, 24, 22], [29]].flatMap((x) => x).every(allfn.isTempLessThan),
    true,
  );
}

function testFrequency() {
  display(
    "notes practiced by the students",
    [["mi", "fa", "so"], ["do", "mi", "fa"], ["fa"]]
      .flatMap((x) => x)
      .reduce(allfn.frequency, {}),
    {"mi" : 2, "fa" : 2, "so" : 1, "do" : 1},
  );
}

function testAll() {
  testRemoveDuplicate();
  testReduce();
  testSome();
  testEvery();
  testFrequency();
  testCount();
}

testAll();