"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (isFor) => {
    return (isFor === 'generate' || isFor === 'import') ?
        { name: 'ECDSA', namedCurve: 'P-521' } :
        { name: 'ECDSA', hash: { name: 'SHA-512' } };
};
