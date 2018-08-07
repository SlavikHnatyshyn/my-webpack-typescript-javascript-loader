import { Validator } from './Validator';

export class minValidator extends Validator {

    private minValue: string

    constructor(minValue: string) {
        super();
        this.minValue = minValue;
    }

    validate(value: string): boolean {
        return this.minValue < value;
    }
}