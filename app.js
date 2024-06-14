var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var tom = new User("Том");
var header = this.document.getElementById("header");
if (header != null)
    header.innerHTML = "\u041F\u0440\u0438\u0432\u0435\u0442 ".concat(tom.name);
else
    console.log('header = null');
