import { Validator } from './Validator';

export class NumberValidator extends Validator {

    private numRegExsp: RegExp;
    constructor() {
        super();
        this.numRegExsp = /^[0-9]*[.,]?[0-9]+$/;
    }

    validate(value: string): boolean {
        return this.numRegExsp.test(value);
    }
}