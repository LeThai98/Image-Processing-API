"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 3000;
// Static file serving middleware
app.use(express_1.default.static(path_1.default.join(__dirname, '/Public')));
//View Engine Setup
app.set('views', path_1.default.join(__dirname, './Template'));
// Sets the view engine to EJS(Embedded Javascript), a templating language that lets you generate HTML markup with plain JavaScript.
app.set('view engine', 'ejs');
// Start the server - Redirect to /api
app.get('/', function (req, res) {
    console.log("Your port is ".concat(process.env.PORT)); // undefined
    var dotenv = require('dotenv');
    dotenv.config();
    console.log("Your port is ".concat(process.env.PORT)); // 8626
    res.send('Welcome to the API');
});
//Starting the Server
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
// Export the app instance for use in other modules
exports.default = app;
