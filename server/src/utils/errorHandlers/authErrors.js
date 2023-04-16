class AuthErrors extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }

    // signup errors
    static userExists(msg) {
        return new AuthErrors(msg, 409);
    }

    // login errors
    static badRequest(msg) {
        return new AuthErrors(msg,400);
    }

    static userNotFound(msg) {
        return new AuthErrors(msg, 404);   
    }

    static invalidPassword(msg) {
        return new AuthErrors(msg, 401);
    }
}

module.exports = {
    AuthErrors,
};