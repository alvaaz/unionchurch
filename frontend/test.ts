// This file is intentionally unformatted to test Prettier
const test = function () {
  const veryLongVariableName =
    "This string is quite long and should be wrapped by Prettier if the printWidth setting is respected";

  for (let i = 0; i < 10; i++) {
    console.log(i); // Extra spaces
  }

  return {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3",
  };
};

export const anotherFunction = (param1, param2, param3) => {
  if (param1) {
    return param2;
  } else {
    return param3;
  }
};
