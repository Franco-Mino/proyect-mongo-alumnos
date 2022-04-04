"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const Notas_1 = __importDefault(require("../models/Notas"));
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
// mostrar nota 
router.get('/home', passport_1.default.authenticate("jwt", { session: false }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { author } = req.body;
    const date = yield Notas_1.default.find({ author: author });
    console.log(date);
    if (!date) {
        return res.status(400).json("No hay nada");
    }
    return res.status(201).json(date);
}));
//crear nota 
router.post('/home', passport_1.default.authenticate("jwt", { session: false }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, edad, grado, author, id } = req.body;
    const user = yield User_1.default.find({ _id: id });
    if (!name && !edad && !grado && !author) {
        return res.status(400).json("se requiere todos los campos");
    }
    if (id === user[0]._id.toString()) {
        const newNota = new Notas_1.default({
            name: name,
            edad: edad,
            grado: grado,
            author: user[0]._id,
        });
        yield newNota.save();
        return res.status(201).json(newNota);
    }
    return res.status(400).json("No se encuentra al usuario");
}));
//editar nota 
router.put('/home', passport_1.default.authenticate("jwt", { session: false }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, edad, grado, id } = req.body;
    const user = yield Notas_1.default.find({ _id: id });
    if (id === user[0]._id.toString()) {
        const persona = yield Notas_1.default.updateOne({ _id: id }, {
            $set: {
                name: name,
                edad: edad,
                grado: grado,
            }
        });
        return res.status(201).json("true");
    }
    return res.status(201).json("error");
}));
// eliminar notas para
router.delete('/home', passport_1.default.authenticate("jwt", { session: false }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const user = yield Notas_1.default.find({ _id: id });
    if (id === user[0]._id.toString()) {
        const persona = yield Notas_1.default.deleteOne({ _id: id });
        return res.status(201).json("true");
    }
    return res.status(201).json("error");
}));
exports.default = router;
