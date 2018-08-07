import { Validator } from './Validator';

export class patternValidator extends Validator {

    private pattern: RegExp

    constructor(pattern: RegExp) {
        super();
        this.pattern = pattern;
        if (pattern == null) {
            throw new Error('Pattern is missing')
        }
    }

    validate(value: string): boolean {
        return this.pattern.test(value);
    }
}
