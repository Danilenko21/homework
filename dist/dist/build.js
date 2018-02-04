'use strict';
$('#inputEmail').on('keyup', function (e) {
  if (e.which === 13) {
    var valEmail = $('#inputEmail').val();var regEmail = /\w+[@]{1}\w+[.]{1}[a-z]/;if (!regEmail.test(valEmail)) {
      $('.validError').text('Incorrect email');
    } else {
      $('.validError').text('');
    }
  }
});$('#inputPassword').on('keyup', function (e) {
  if (e.which === 13) {
    var valPassword = $('#inputPassword').val();var regPassword = /\w{6,}/;if (!regPassword.test(valPassword)) {
      $('.validError').text('Incorrect password. Minimum 6 characters.');
    } else {
      $('.validError').text('');
    }
  }
});$('#inputPasswordAgain').on('keyup', function (e) {
  if (e.which === 13) {
    var valPasswordAgain = $('#inputPasswordAgain').val();if (!($('#inputPassword').val() === valPasswordAgain)) {
      $('.validError').text('Passwords are not identical.');
    }
  }
});$('.btnSignIn').click(function () {});
//# sourceMappingURL=build.js.map