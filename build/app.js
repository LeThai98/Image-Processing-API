"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
// Start the server - Redirect to /api
app.get('/', function (req, res) {
    res.redirect('/api');
});
app.use('/api', function (req, res) {
    res.send('Hello World!');
});
//Starting the Server
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
// Export the app instance for use in other modules
exports.default = app;
