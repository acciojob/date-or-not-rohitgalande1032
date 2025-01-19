var isDate = function (input) {
  //   write your code here
  let parseDate = Date.parse(input);
  return !isNaN(parseDate);
};

// Do not change the code below 
const input = prompt("Enter Date.");
alert(isDate(input));
