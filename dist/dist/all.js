"use strict";
$("#inputEmail").on("keyup", function (t) {
  13 === t.which && valEmail();
}), $("#inputPassword").on("keyup", function (t) {
  13 === t.which && valPassword();
}), $("#inputPasswordAgain").on("keyup", function (t) {
  13 === t.which && valPassAgain();
}), $(".btnSignIn").click(function () {
  var t = $("#inputEmail").val(),
      i = $(".validError");if (/\w+[@]{1}\w+[.]{1}[a-z]/.test(t)) {
    i.text("");var a = $("#inputPassword").val();if (/\w{6,}/.test(a)) i.text(""), a !== $("#inputPasswordAgain").val() && i.text("Passwords are not identical.");else i.text("Incorrect password. Minimum 6 characters.");
  } else i.text("Incorrect email");
});
"use strict";var valEmail = function valEmail() {
  var a = $("#inputEmail").val();/\w+[@]{1}\w+[.]{1}[a-z]/.test(a) ? $(".validError").text("") : $(".validError").text("Incorrect email");
},
    valPassword = function valPassword() {
  var a = $("#inputPassword").val();/\w{6,}/.test(a) ? $(".validError").text("") : $(".validError").text("Incorrect password. Minimum 6 characters.");
},
    valPassAgain = function valPassAgain() {
  var a = $("#inputPasswordAgain").val();$("#inputPassword").val() !== a && $(".validError").text("Passwords are not identical.");
};
//# sourceMappingURL=all.js.map