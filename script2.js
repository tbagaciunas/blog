$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


const loginBtn = document.querySelector('.login-form button');

// Add an event listener to the login button
loginBtn.addEventListener('click', () => {
  // Load the index.html file
  window.location.href = './index.html';
});
