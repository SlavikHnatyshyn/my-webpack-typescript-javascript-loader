import { Validator } from './Validator';

export class minLengthValidator extends Validator {

    private minLength: number

    constructor(minLength: number) {
        super();
        this.minLength = minLength;
    }

    validate(value: string): boolean {
        return this.minLength < value.length;
    }
}