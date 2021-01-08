var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    // returns "void" because there is no return
    console.log('Result: ' + num);
};
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
printResult(add(5, 12));
// this says that combineValues can be a function that takes two numbers as parameters and returns a number
var combineValues;
combineValues = add;
// combineValues = printResult; does not work because it doesn't match the signature above
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
