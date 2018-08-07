import { Validator } from './Validator';
import { EventEmitter } from './EventEmitter';

// describe interface FormControlModel, this interface is for FormControl and FormGroup 
interface FormControlModel<V = any> {

    status: boolean;
    value: V;
    id: string;
}

// class  FormControl 
export class FormControl implements FormControlModel {
    public value: string;
    public status: boolean;
    public valueChange: EventEmitter<{ inputId: string, statusValue: boolean }>;
    public statusChange: EventEmitter<{ inputId: string, statusValue: boolean }>;
    public input: HTMLInputElement;

    constructor(public id: string, public initialValue: null, public validators: Array<Validator>) {
        this.validators = validators;
        this.status = false;
        this.valueChange = new EventEmitter();
        this.statusChange = new EventEmitter();
        this.input = document.getElementById(id) as HTMLInputElement;
        this.value = this.input.value;

        // check input when it will change, if it change,update inputId and status 
        this.input.addEventListener('change', (event: Event) => {
            this.status = this.validators.every((validator: Validator): boolean => {
                return validator.validate((event.target as HTMLInputElement).value)
            })

            this.value = this.input.value;
            // send updated inputId and status on emit
            this.valueChange.emit({
                inputId: this.value,
                statusValue: this.status
            })

        });


    }
}

// class FormGroup
export class FormGroup implements FormControlModel {
    public id: string;
    private controls: Array<FormControl>;
    public status: boolean;
    public arrayOfBoolean: Array<boolean>;
    public value: object | any;
    public valueChange: EventEmitter<{ inputId: object, statusValue: Array<boolean> }>;
    public statusChange: EventEmitter<{ inputId: object, statusValue: Array<boolean> }>;

    constructor(id: string, controls: Array<FormControl>) {
        this.id = id;
        this.controls = controls;
        this.value = {};
        this.status = false;
        this.valueChange = new EventEmitter();
        this.statusChange = new EventEmitter();

        // check each element
        this.controls.forEach((element: FormControl): void => {

            // if this element updated, update their status and value
            element.valueChange.subscribe((change: object) => {
                this.arrayOfBoolean = this.controls.map((element: FormControl) => element.status);
                this.value = this.controls.map((element: FormControl) => element.value);

                // send udated inputId and status
                this.valueChange.emit({
                    inputId: this.value,
                    statusValue: this.arrayOfBoolean
                });


            })
        })
    }
}

