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
```js
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

```js
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

### Union Types
``` const combine = (input1: number | string, input2: number | string) => {}```
- you may still have to do a type check depending on the logic you're writing

### Literal Types
```resultConversion: 'as-number' | 'as-text'```
- Only these two strings will ever be accepted for this value

### Type Aliases/Custom Types
``` type Combinable = number | string;```
- Can now use the word "Combinable" in place of "number | string". 
- This can be used for any type setup we might want to store in an alias
- Works very well for objects

### Function Return Types & "void"
- functions have an implicit return type, but they can also be declared
```js
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};
```
- returns "void"
```js
const printResult = (num: number) => {
  // returns "void" because there is no return statement
  console.log('Result: ' + num);
};
```

### Functions as Types
```js
// this says that combineValues can be a function that takes two numbers as parameters and returns a number
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; does not work because it doesn't match the signature above
```

### Function Types & Callbacks
```js
// specify the signature of the callback function here
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

// don't need to specify types here since it's already declared above
// if this function had a return statement, nothing would happen with it in addAndHandle because the return is set to void 
addAndHandle(10, 20, result => {
  console.log(result);
});
```

### Unknown Type
- Different from "any" in that a variable that is set to "unknown" cannot then be set to a variable that requires a specific type.
- Unknown is a little better than any because you can't just assign it anything you want.
- The following code will show an error for 'userName = userInput' because it requires a string type.

```js
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Tucker';

userName = userInput;
```

### Never Type
```js 
const generateError = (message: string, code: number) => {
  throw { massage: message, errorCode: code };
};

// this returns "never" because the function never produces a value and therefore never returns anything
const result = generateError('An error occurred!', 500);
```

- It can also be set explicitly in the function

```js
const generateError = (message: string, code: number): never => {
  throw { massage: message, errorCode: code };
};

generateError('An error occurred!', 500);
```