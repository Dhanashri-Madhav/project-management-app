export abstract class BaseError extends Error {
    constructor(message?: string) {
        super(message);

        Object.setPrototypeOf(this, BaseError.prototype);
    }
}

export class ClientError extends BaseError {
    constructor(message?: string) {
        super(message);

        Object.setPrototypeOf(this, ClientError.prototype);
    }
}

export class ServerError extends BaseError {
    constructor(message?: string) {
        super(message);

        Object.setPrototypeOf(this, ServerError.prototype);
    }
}

export class InputValidationError extends BaseError {
    constructor(message?: string) {
        super(message);

        Object.setPrototypeOf(this, InputValidationError.prototype);
    }
}

export class NoDataFoundError extends BaseError {
    constructor(message?: string) {
        super(message);

        Object.setPrototypeOf(this, NoDataFoundError.prototype);
    }
}

