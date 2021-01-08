var userInput;
var userName;
userInput = 5;
userInput = 'Tucker';
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { massage: message, errorCode: code };
};
generateError('An error occurred!', 500);
