

$('.contact form').on('submit', function (e) {
  e.preventDefault()
  $('.error-message').remove()
  const input_values = {
    firstName : $('#first-name').val(),
    lastName : $('#last-name').val(),
    email : $('#email').val(),
    phone : $('#phone').val(),
    message : $('#message').val()
  }

  const error_messages = {}


  // Validation for First Name
  if ( input_values.firstName.length <= 0 ) {
    error_messages.firstName = 'Please write your first name 😅'
  }

  // Validation for Last Name
  if ( input_values.lastName.length <= 0 ) {
    error_messages.lastName = 'Please write your last name 😅'
  }

  // Validation for Email Address
  const email_pattern = /(?:((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?));*)/g
  if ( input_values.email.length <= 0  ) {
    error_messages.email = 'Please enter an email address 😅'
  } else if ( !email_pattern.test(input_values.email) ) {
  // Is the input an actual email
    error_messages.email = 'Your email does not seem to be an email 🤔'
  } 

  // Validation for Phone Number

  const phone_pattern = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/
  if ( input_values.phone.length > 0 ) {
    if( !phone_pattern.test(input_values.phone) ){
      error_messages.phone = 'Is that really a phone number ??? 🤔'
    }
  }


  // Validation for Message
  if ( input_values.message.length <= 0 ) {
    error_messages.message = 'You forgot to write a message 😅' 
  }


  // Generate error messages
  if (!$.isEmptyObject(error_messages)){
    if ( error_messages.firstName ) {
      $('#first-name').after(`<span class="error-message">${error_messages.firstName}</span>`)
    }
    
  } else { // Handle sending data to server
    $('<div class="loading-container"><img src="http://i.stack.imgur.com/FhHRx.gif" alt="Loading"> . . . Sending Data</div>').appendTo('.contact form')

    setTimeout(function () {
      $('.loading-container').html('Great Success 🚀')
    }, 5000)
  }
  
  
})
