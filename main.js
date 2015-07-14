function renderFizzBuzz(){
  input =  $('input').val();
  // parseInt() takes a string representing a number
  // as input and converts it into a numerical value.
  $('#results').text(fizzbuzz(parseInt(input)));
}

$('button').click(renderFizzBuzz);
