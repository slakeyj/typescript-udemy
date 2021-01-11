let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Tucker';

if (typeof userInput === 'string') {
  userName = userInput;
}

const generateError = (message: string, code: number) => {
  throw { massage: message, errorCode: code };
};

// this returns "never" because the function never produces a value and therefore never returns anything
const result = generateError('An error occurred!', 500);
