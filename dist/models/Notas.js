"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const NotasSchema = new mongoose_2.Schema({
    name: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    grado: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose_1.default.Types.ObjectId
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.default = (0, mongoose_2.model)('Notas', NotasSchema);
