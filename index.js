
$('form').on('click', '#button', function(){
  var $text = $('#text').val();
  console.log($text);
  $('#text').val('Your info has ben submitted').css({'color': 'green'});
});