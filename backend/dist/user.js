"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email == this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "julia@gmail.com": new User('julia@gmail.com', 'Julia', '123'),
    "amanda@gmail.com": new User('amanda@gmail.com', 'Amanda', '123')
};
