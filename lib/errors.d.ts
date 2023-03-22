export declare class JWTError extends Error {
    constructor(message: string);
}
export declare class CreateTokenError extends JWTError {
    constructor(message: string);
}
export declare class DecodeTokenError extends JWTError {
    constructor(message: string);
}
export declare class VerifyTokenError extends JWTError {
    constructor(message: string);
}
export declare class VerifyTokenExpiredError extends VerifyTokenError {
    constructor(message: string);
}
