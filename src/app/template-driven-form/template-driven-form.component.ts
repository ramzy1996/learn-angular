import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-template-driven-form',
    templateUrl: './template-driven-form.component.html',
    styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
    countryList: Country[] = [
        new Country('1', 'Sri-Lanka'),
        new Country('2', 'USA'),
        new Country('3', 'England')
    ]

    contact!: Contact;
    onSubmit(form: NgForm) {
        console.log(form.value)
    }

    ngOnInit(): void {
        this.contact = {
            "firstName": "Ramzy",
            "lastName": "Ahmed",
            "email": "ramzyahamed96@gmail.com",
            "gender": "male",
            "isMarried": true,
            "country": "1",
            "address": {
                "city": "Weligama",
                "street": "Kapuwatta",
                "pincode": "201212"
            },
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

class Contact {
    firstName!: string;
    lastName!: string;
    email!: string;
    gender!: string;
    isMarried!: boolean;
    country!: string;
    address!: {
        city: string;
        street: string;
        pincode: string;
    }
}