import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
    countryList: Country[] = [
        new Country('1', 'Sri-Lanka'),
        new Country('2', 'USA'),
        new Country('3', 'England')
    ]
    contactForm = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(10)]),
        lastName: new FormControl({
            value: '', disabled: false
        }, [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-Z]+$')]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl(null, [Validators.required]),
        isMarried: new FormControl(false, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
        address: new FormGroup({
            city: new FormControl(null, [Validators.required]),
            street: new FormControl(null, [Validators.required]),
            pincode: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(5)]),
        })
    })
    get lastname() {
        return this.contactForm.get('lastName')
    }
    get email() {
        return this.contactForm.get('email')
    }
    get gender() {
        return this.contactForm.get('gender')
    }
    get isMarried() {
        return this.contactForm.get('isMarried')
    }
    get country() {
        return this.contactForm.get('country')
    }
    get city() {
        return this.contactForm.get('address.city')
    }
    get street() {
        return this.contactForm.get('address.street')
    }
    get pincode() {
        return this.contactForm.get('address.pincode')
    }
    onSubmit() {
        if (this.contactForm.valid) {
            console.log(this.contactForm.value)
        }
    }
}

class Country {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name
    }
}