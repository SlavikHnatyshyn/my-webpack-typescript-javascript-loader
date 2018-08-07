import { Validator } from './Validator';

export class maxLengthValidator extends Validator {

    private maxLength: number
    constructor(maxLength: number) {
        super();
        this.maxLength = maxLength;
    }

    validate(value: string): boolean {
        return this.maxLength > value.length;
    }
}