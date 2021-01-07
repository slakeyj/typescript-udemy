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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// ADMIN is given a value of 0, READ_ONLY a value of 1, and AUTHOR a value of 2
var person = {
    name: 'Mary',
    age: 30,
    hobbies: ['running', 'reading'],
    role: Role.ADMIN
};
// let favoriteActivites: string[];
// console.log(person);
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }
if (person.role === Role.ADMIN) {
    console.log('is admin', Role.ADMIN);
}
