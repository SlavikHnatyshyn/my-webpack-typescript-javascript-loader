import { Validator } from './Validator';

export class RequireValidator extends Validator {

    constructor() {
        super();
    }

    validate(value: string): boolean {
        if (value === '') {
            return false;
        }
        else {
            return super.validate(value);
        }
    }
}
