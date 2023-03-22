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
const getNowInSeconds_1 = __importDefault(require("./getNowInSeconds"));
const getAlgorithmOptions_1 = __importDefault(require("./getAlgorithmOptions"));
const errors_1 = require("./errors");
exports.default = (jwt, publicJWK, Buffer) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenParts = jwt.split('.');
    if (tokenParts.length !== 3)
        throw new errors_1.VerifyTokenError('Invalid token');
    else {
        const headerAsString = Buffer.from(tokenParts[0], 'base64').toString(); // base64 to string
        const expiresInAsSeconds = JSON.parse(headerAsString).exp;
        if (expiresInAsSeconds <= (0, getNowInSeconds_1.default)())
            throw new errors_1.VerifyTokenExpiredError('Token has expired');
        else {
            const signatureInUInt8 = Buffer.from(tokenParts[2], 'base64'); // base46 to uInt8
            const headerPayloadAsArrayBuffer = new TextEncoder().encode(`${headerAsString}.${Buffer.from(tokenParts[1], 'base64').toString()}`);
            const publicKey = yield crypto.subtle.importKey('jwk', JSON.parse(publicJWK), (0, getAlgorithmOptions_1.default)('import'), true, ['verify']);
            const isValid = yield crypto.subtle.verify((0, getAlgorithmOptions_1.default)('verify'), publicKey, signatureInUInt8, headerPayloadAsArrayBuffer);
            if (!isValid)
                throw new errors_1.VerifyTokenError('Invalid token');
            else
                return JSON.parse(Buffer.from(tokenParts[1], 'base64').toString()); // base64 to json
        }
    }
});
