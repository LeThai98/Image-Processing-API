"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizedImageThumpPath = exports.resizeImage = void 0;
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var resizeImage = function (name, width, height) {
    return (0, sharp_1.default)(path_1.default.resolve("src/Public/Image/full/".concat(name, ".jpg")))
        .resize({ width: width, height: height, fit: sharp_1.default.fit.cover })
        .toBuffer();
};
exports.resizeImage = resizeImage;
var resizedImageThumpPath = function (name, width, height) {
    return "src/Public/Image/thumbWithResize/".concat(name).concat(height, "x").concat(width, ".jpg");
};
exports.resizedImageThumpPath = resizedImageThumpPath;
