// Exercise 1

const num = 1;

const testNum = new Promise((resolve, reject) => {
  if (num <= 10) {
    resolve("Correct (kleiner dan of gelijk aan 10");
  } else {
    reject("Incorrect (groter dan 10");
  }
});

const testTestNum = () => {
  testNum
    .then((message) => console.log(message))
    .catch((message) => {
      console.log(message);
    });
};

testTestNum();

// Exercise 2

const makeAllCaps = (list) => {
  return new Promise((resolve, reject) => {
    if (check(list)) {
      resolve(list.map((item) => item.toUpperCase()));
    } else {
      reject("Niet ok");
    }
  });
};

const sortWords = (list) => {
  return new Promise((resolve, reject) => {
    if (check(list)) {
      resolve(list.sort());
    } else {
      reject("Niet ok");
    }
  });
};

function check(list) {
  return list.every((element) => typeof element === "string");
}

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const doItAll = (list) => {
  console.log("original input: " + list);
  sortWords(list)
    .then((message) => {
      console.log("after first step: " + message);
      makeAllCaps(message).then((message) => {
        console.log("after second step: " + message);
      });
    })
    .catch((message) => {
      console.log("wrong input: " + message);
    });
};

doItAll(arrayOfWords);
doItAll(complicatedArray);
