$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


$('.login-form button').click(function(e) {
  e.preventDefault(); // prevent the form from submitting normally
  window.location.href = "index.html"; // redirect to the main page
});
