
class Validator {

    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }

    getErrorMessage() {
        return this.errorMessage || 'La respuesta no es válida.';
    }

    isValid() {
        throw new Error('Must be implemented in subclass');
    }

}

module.exports = Validator;
