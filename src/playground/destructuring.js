//Object destructuring

// console.log(`destructuring`);

// const person = {
//   name: `Brent`,
//   age: 33,
//   location: {
//     city: `Auckland`,
//     temp: 10
//   }
// };

// const { name = `Anonymous`, age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}.`);

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: `Ego is the Enemy`,
//   author: `Ryan Holiday`,
//   publisher: {
//     name: `Penguin`
//   }
// };

// const { name: PublisherName = `Self-Published` } = book.publisher;

// console.log(PublisherName);

//Array destructuring

const address = [`17 Eastview Crescent`, `Stanmore Bay`, `Auckland`, `0935`];

const [, city, state, zip] = address;

console.log(`You are in ${city}, ${state}.`);

const item = [`Coffee (hot)`, `$2.00`, `$2.50`, `$2.75`];

const [drink, small, medium, large] = item;

console.log(`A medium ${drink} costs ${medium}`);
