'use strict';

var valEmail = function valEmail() {
    var valEmail = $('#inputEmail').val();
    var regEmail = /\w+[@]{1}\w+[.]{1}[a-z]/;
    if (!regEmail.test(valEmail)) {
        $('.validError').text('Incorrect email');
    } else {
        $('.validError').text('');
    }
};

var valPassword = function valPassword() {
    var valPassword = $('#inputPassword').val();
    var regPassword = /\w{6,}/;
    if (!regPassword.test(valPassword)) {
        $('.validError').text('Incorrect password. Minimum 6 characters.');
    } else {
        $('.validError').text('');
    }
};

var valPassAgain = function valPassAgain() {
    var valPasswordAgain = $('#inputPasswordAgain').val();
    if (!($('#inputPassword').val() === valPasswordAgain)) {
        $('.validError').text('Passwords are not identical.');
    }
};
//# sourceMappingURL=function.js.map