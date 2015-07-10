function renderFizzBuzz(){
  input =  $('input').val();
  $('#results').text(fizzbuzz(parseInt(input)));
}

$('button').click(renderFizzBuzz);
