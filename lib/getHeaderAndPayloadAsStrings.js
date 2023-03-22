"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getNowInSeconds_1 = __importDefault(require("./getNowInSeconds"));
exports.default = (payloadAsObject, expiresInAsSeconds) => {
    const header = JSON.stringify({ alg: 'ES512', typ: 'JWT', exp: expiresInAsSeconds + (0, getNowInSeconds_1.default)() });
    const payloadAsString = JSON.stringify(payloadAsObject);
    return { payload: payloadAsString, header, united: `${header}.${payloadAsString}` };
};
