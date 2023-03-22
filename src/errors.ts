export class JWTError extends Error {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}


export class CreateTokenError extends JWTError {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}


export class DecodeTokenError extends JWTError {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}


export class VerifyTokenError extends JWTError {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}


export class VerifyTokenExpiredError extends VerifyTokenError {
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
  }
}
