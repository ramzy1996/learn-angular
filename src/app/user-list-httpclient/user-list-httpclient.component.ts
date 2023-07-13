import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-user-list-httpclient',
    templateUrl: './user-list-httpclient.component.html',
    styleUrls: ['./user-list-httpclient.component.css']
})
export class UserListHttpclientComponent implements OnInit {
    users: Users[] = []
    userForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl('')
    })
    constructor(private http: HttpClient) {

    }
    ngOnInit(): void {
        this.getUsers().subscribe((res) => {
            this.users = res
            console.log('response', res)
        })
    }
    getUsers(): Observable<any> {
        return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
    }
    addUser() {
        return this.http.post<Users>('https://jsonplaceholder.typicode.com/users', {
            name: this.userForm.controls.name.value,
            email: this.userForm.controls.email.value,
        })
    }
    onSubmit() {
        this.addUser().subscribe(res => {
            this.users.push(res)
        })
        console.log(this.userForm.value)
    }
}

class Users {
    name!: string;
    email!: string;
}
