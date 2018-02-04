let valEmail = () => {
    let valEmail = $('#inputEmail').val();
    let regEmail = /\w+[@]{1}\w+[.]{1}[a-z]/;
    if (!regEmail.test(valEmail)) {
        $('.validError').text('Incorrect email');
    } else {
        $('.validError').text('');
    }
};

let valPassword = () => {
    let valPassword = $('#inputPassword').val();
    let regPassword = /\w{6,}/;
    if (!regPassword.test(valPassword)) {
        $('.validError').text('Incorrect password. Minimum 6 characters.');
    } else {
        $('.validError').text('');
    }
};

let valPassAgain =() => {
    let valPasswordAgain = $('#inputPasswordAgain').val();
    if( !($('#inputPassword').val() === valPasswordAgain)) {
        $('.validError').text('Passwords are not identical.');
    }
};