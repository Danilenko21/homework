'use strict';

$('#inputEmail').on('keyup', function (e) {
    if (e.which === 13) {
        valEmail();
    }
});

$('#inputPassword').on('keyup', function (e) {
    if (e.which === 13) {
        valPassword();
    }
});

$('#inputPasswordAgain').on('keyup', function (e) {
    if (e.which === 13) {
        valPassAgain();
    }
});

$('.btnSignIn').click(function () {
    var valEmail = $('#inputEmail').val();
    var regEmail = /\w+[@]{1}\w+[.]{1}[a-z]/;
    var divError = $('.validError');
    if (!regEmail.test(valEmail)) {
        divError.text('Incorrect email');
    } else {
        divError.text('');
        var _valPassword = $('#inputPassword').val();
        var regPassword = /\w{6,}/;
        if (!regPassword.test(_valPassword)) {
            divError.text('Incorrect password. Minimum 6 characters.');
        } else {
            divError.text('');
            var valPasswordAgain = $('#inputPasswordAgain').val();
            if (!(_valPassword === valPasswordAgain)) {
                divError.text('Passwords are not identical.');
            }
        }
    }
});
//# sourceMappingURL=app.js.map