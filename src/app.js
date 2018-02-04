$('#inputEmail').on('keyup', function (e) {
    if(e.which === 13) {
        valEmail();
    }
});

$('#inputPassword').on('keyup', function (e) {
    if(e.which === 13) {
        valPassword();
    }
});

$('#inputPasswordAgain').on('keyup', function (e) {
    if(e.which === 13) {
        valPassAgain();
    }
});


$('.btnSignIn').click(function () {
    let valEmail = $('#inputEmail').val();
    let regEmail = /\w+[@]{1}\w+[.]{1}[a-z]/;
    let divError = $('.validError');
    if (!regEmail.test(valEmail)) {
        divError.text('Incorrect email');
    } else {
        divError.text('');
        let valPassword = $('#inputPassword').val();
        let regPassword = /\w{6,}/;
        if (!regPassword.test(valPassword)) {
            divError.text('Incorrect password. Minimum 6 characters.');
        } else {
            divError.text('');
            let valPasswordAgain = $('#inputPasswordAgain').val();
            if( !(valPassword === valPasswordAgain)) {
                divError.text('Passwords are not identical.');
            }
        }
    }
});
