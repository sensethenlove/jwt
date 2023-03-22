"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (content, Buffer) => {
    return Buffer.from(content).toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+/g, '');
};
