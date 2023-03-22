"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
exports.default = (jwt, Buffer) => {
    const jwtParts = jwt.split('.');
    if (jwtParts.length !== 3)
        throw new errors_1.DecodeTokenError('Invalid token');
    else
        return JSON.parse(Buffer.from(jwtParts[1], 'base64').toString());
};
