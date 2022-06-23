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
  {
    favoriateColor: "purple",
    id: 1,
    firstName: "David",
    lastName: "Li",
    age: 15,
  },
  {
    favoriateColor: "blue",
    id: 2,
    firstName: "Mary",
    lastName: "Lin",
    age: 12,
  },
  {
    favoriateColor: "purple",
    id: 3,
    firstName: "Larry",
    lastName: "Johnson",
    age: 20,
  },
  {
    favoriateColor: "green",
    id: 4,
    firstName: "John",
    lastName: "Legend",
    age: 17,
  },
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

function getOldest(users) {
  let age = 0;
  let oldestIndex = 0;
  users.forEach((user, index) => {
    if (user.age > age) {
      age = user.age;
      oldestIndex = index;
    }
  });
  return users[oldestIndex];
}

// function getOldest2(users) {
//   const ages = users.map((user) => user.age);
//   const oldest = Math.max.apply(ages);
//   const final = users.filter((user) => user.age === oldest);
//   return final;
// }

console.log(getOldest(users));

function getFullInitials(users) {
  return users.map((user) => {
    return `${user.firstName[0]}${user.lastName[0]}`;
  });
}

console.log(getFullInitials(users));
const string = "akflalfkalerre";
console.log(string[5]);

function getById(users, id) {
  return users.filter((user) => user.id === id);
}

console.log(getById(users, 2));

function getFavoriteColorList(users, color) {
  const allPeopleLoveSomeColor = users.filter(
    (user) => user.favoriateColor === color
  );
  return allPeopleLoveSomeColor;
}

const allPeopleLovePurple = getFavoriteColorList(users, "purple");
console.log("test", allPeopleLovePurple);

function fixCar(car) {
  car.engine = "working";

  return car;
}

function sellYourCarInTheBlackMarket(car) {
  console.log(`car is sold to black market and the car is ${car}`);
}

function stealYourCar(car) {
  sellYourCarInTheBlackMarket(car);
  console.log("I made 30k for selling a stolen");
}

function bodyShop(car, amount) {
  console.log(`$${amount} is deposited`);
  const fixedCar = fixCar(car);
  return fixedCar;
}

const car = { engine: "broken" };

const myFixedCarInGoodCondition = bodyShop(car, 1000);

console.log(myFixedCarInGoodCondition); // { engine: "working" };
