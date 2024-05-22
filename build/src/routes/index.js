"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var images_1 = __importDefault(require("./api/images"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    var imageNames = fs_1.default
        .readdirSync(path_1.default.resolve('src/Public/Image/full'))
        .map(function (filename) { return filename.substring(0, filename.length - 4); });
    // render a view template and send the resulting HTML to the client. =>Express will look for ./Template/index.ejs
    res.render('index', { imageNames: imageNames });
});
router.use('/image', images_1.default);
exports.default = router;
