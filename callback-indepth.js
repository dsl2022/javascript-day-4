function serveNoodles(typeOfNoodles, typeOfSoup) {
  console.log(`"Enjoy your ${typeOfNoodles} and your ${typeOfSoup} soup!`);
}

function cookNoodles(typeOfNoodles, typeOfSoup) {
  console.log(`prepare your ${typeOfSoup}`);
  console.log(`boiling your ${typeOfNoodles}`);
}

function noodleFoodie(typeOfNoodles, typeOfSoup, callMeBack) {
  callMeBack(typeOfNoodles, typeOfSoup);
}

noodleFoodie("egg noodle", "wonton", cookNoodles);
noodleFoodie("egg noodle", "wonton", serveNoodles);

const nums = [];

for (let i = 0; i < 100; i++) {
  nums.push(i);
}

function countAnimal(num, animal) {
  console.log(`${num} little ${animal}!`);
}

function buyItem(num, item) {
  console.log(`let buy ${num} ${item}!`);
}

nums.forEach((number) => countAnimal(number, "sheep"));
nums.forEach((number) => buyItem(number, "sheep"));

nums.forEach((number) => console.log(`let buy ${number} shoe!`));

function bookMapper(number) {
  const obj = { bookId: number, book: `book ${number}` };
  return obj;
}

const finalBookObject = nums.map(bookMapper);

const finalBookObject2 = nums.map((number) => {
  const obj = { bookId: number, book: `book ${number}` };
  return obj;
});

console.log(finalBookObject);

const isEven = (num) => {
  if (num % 2 === 0) return true;
  else return false;
};

const filteredOutEven = nums.filter(isEven);

// const filteredOutPrime2 = nums.filter((num) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//     if (num % i !== 0) return num;
// });

// console.log(filteredOutPrime);

// map
// filter
// reduce

const users = [
  { firstName: "David", lastName: "test", age: 15 },
  { firstName: "Mary", lastName: "test", age: 12 },
  { firstName: "Larry", lastName: "test", age: 20 },
  { firstName: "John", lastName: "test", age: 17 },
];

function getFirstNames(users) {
  return users.map((person) => {
    console.log(person);
    return person.firstName;
  });
}

console.log(getFirstNames(users));

function getFullNames(users) {
  return users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
  });
}

console.log(getFullNames(users));

function getTeenagers(users) {
  return users
    .filter((user) => {
      return user.age > 13 && user.age < 18;
    })
    .map((user) => {
      return `Hello ${user.firstName}, ${user.lastName}`;
    });
}

console.log("test", getTeenagers(users));
