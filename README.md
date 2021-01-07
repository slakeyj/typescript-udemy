# Understanding TypeScript
- A compilation of practice projects from the Understanding Typescript Udemy course by Maximilian Schwarzmü ller


## Notes
### Inference
- type inference: typescript does its best to understand what type you have in a certain variable or constant
```let number1 = 5;```
- infers that it is a number, not necessary to declare it


- can declare it like so:

```let number1: number;```
- ensures only a number will ever be assigned to it later

### Tuple
- Added by TypeScript: Fixed-length array
- Example:
```role: [number, string]```
- Must be 2 values with the above structure
- If you know your array will always a specific structure, a tuple can be good to use because it makes the expectation even stricter and more likely to catch errors.

### Enum
- added by TypeScript: automatically enumerate global constant identifiers
```
//  instead of this
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

// we can use enum

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// ADMIN is given a value of 0, READ_ONLY a value of 1, and AUTHOR a value of 2
```

- Can assign own values like so:

```
enum Role {
  ADMIN = 5,
  READ_ONLY = 140,
  AUTHOR = 2,
}
```

### Any
- Any kind of value, no specific type assignment
```let favoriteActivites: any[];```
- typically want to avoid using it, if you know your data type, be explicit about it
