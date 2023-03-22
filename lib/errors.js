"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyTokenExpiredError = exports.VerifyTokenError = exports.DecodeTokenError = exports.CreateTokenError = exports.JWTError = void 0;
class JWTError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.JWTError = JWTError;
class CreateTokenError extends JWTError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.CreateTokenError = CreateTokenError;
class DecodeTokenError extends JWTError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.DecodeTokenError = DecodeTokenError;
class VerifyTokenError extends JWTError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.VerifyTokenError = VerifyTokenError;
class VerifyTokenExpiredError extends VerifyTokenError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.VerifyTokenExpiredError = VerifyTokenExpiredError;
