import { Validator } from './Validator';

export class EmailValidator extends Validator {

    private reg: RegExp;
    constructor() {
        super();
        this.reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    }

    validate(value: string): boolean {
        return this.reg.test(value);
    }
}