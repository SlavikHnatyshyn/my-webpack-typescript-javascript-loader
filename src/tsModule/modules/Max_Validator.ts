import { Validator } from './Validator';

export class maxValidator extends Validator {

    private maxValue: string
    constructor(maxValue: string) {
        super();
        this.maxValue = maxValue;
    }

    validate(value: string): boolean {
        return this.maxValue > value;
    }
}