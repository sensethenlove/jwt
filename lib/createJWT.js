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
const toBase64Url_1 = __importDefault(require("./toBase64Url"));
const getAlgorithmOptions_1 = __importDefault(require("./getAlgorithmOptions"));
const getHeaderAndPayloadAsStrings_1 = __importDefault(require("./getHeaderAndPayloadAsStrings"));
exports.default = (jwtPayload, expiresInAsSeconds, privateJWK, Buffer) => __awaiter(void 0, void 0, void 0, function* () {
    const privateKey = yield crypto.subtle.importKey('jwk', JSON.parse(privateJWK), (0, getAlgorithmOptions_1.default)('import'), true, ['sign']);
    const { header, payload, united } = (0, getHeaderAndPayloadAsStrings_1.default)(jwtPayload, expiresInAsSeconds);
    const unitedAsArrayBuffer = new TextEncoder().encode(united);
    const signatureAsArrayBuffer = yield crypto.subtle.sign((0, getAlgorithmOptions_1.default)('sign'), privateKey, unitedAsArrayBuffer);
    const signatureAsBase64 = (0, toBase64Url_1.default)(new Uint8Array(signatureAsArrayBuffer), Buffer);
    const headerAsBase64 = (0, toBase64Url_1.default)(header, Buffer);
    const payloadAsBase64 = (0, toBase64Url_1.default)(payload, Buffer);
    return `${headerAsBase64}.${payloadAsBase64}.${signatureAsBase64}`;
});
