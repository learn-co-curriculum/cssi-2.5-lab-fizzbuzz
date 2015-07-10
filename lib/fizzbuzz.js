var fizzbuzz = function(number){
  var string = "";
  if (number % 3 === 0){
    string = "Fizz"
  }
  if (number % 5 === 0){
    string = string + "Buzz"
  }
  if (string){
    return string;
  } else {
    return number;
  }
};
