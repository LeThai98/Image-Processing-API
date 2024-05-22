"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
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
    res.redirect('/api');
});
app.use('/api', routes_1.default);
//Starting the Server
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
// Export the app instance for use in other modules
exports.default = app;
