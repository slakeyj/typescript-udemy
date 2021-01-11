// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple
// } = {
//   name: 'Mary',
//   age: 30,
//   hobbies: ['running', 'reading'],
//   role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// instead of above, we can use enum

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// ADMIN is given a value of 0, READ_ONLY a value of 1, and AUTHOR a value of 2

const person = {
  name: 'Mary',
  age: 30,
  hobbies: ['running', 'reading'],
  role: Role.ADMIN,
};

let favoriteActivites: any[];

// console.log(person);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

if (person.role === Role.ADMIN) {
  console.log('is admin', Role.ADMIN);
}
