import { RequireValidator } from './modules/Require_Validator';
import { EmailValidator } from './modules/Email_Validator';
import { NumberValidator } from './modules/Number_Validator';
import { minValidator } from './modules/Min_Validator';
import { maxValidator } from './modules/Max_Validator';
import { minLengthValidator } from './modules/Min_Length_Validator';
import { maxLengthValidator } from './modules/Max_Length_Validator';
import { patternValidator } from './modules/Pattern_Validator'

import { EventEmitter } from './modules/EventEmitter';
import { FormControl, FormGroup } from './modules/FormControl_Group';

const formGroup = new FormGroup('test-form', [
    new FormControl('input-1', null, [new RequireValidator()]),
    new FormControl('input-2', null, [new EmailValidator()]),
    new FormControl('input-3', null, [new NumberValidator()]),
    new FormControl('input-4', null, [new minValidator('5')]),
    new FormControl('input-5', null, [new maxValidator('30')]),
    new FormControl('input-6', null, [new minLengthValidator(5)]),
    new FormControl('input-7', null, [new maxLengthValidator(30)]),
    new FormControl('input-8', null, [new patternValidator(/[\x1F-\xBF]*/)])
]);

formGroup.valueChange.subscribe((change: object) => {
    console.log('FormGroup change', change);
});




