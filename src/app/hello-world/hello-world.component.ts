import { Component } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
    title = 'Learning Angular'
    color = 'red'
    isDisabled = true
    clickCount = 0
    clickCountCopy = 0
    value = ''
    value1 = ''
    movies = [
        { title: 'Zootopia', director: 'dir00', cast: 'test0', releaseDate: '2023-07-24' },
        { title: 'Batman', director: 'dir01', cast: 'test1', releaseDate: '2023-07-25' },
        { title: 'X-men', director: 'dir02', cast: 'test2', releaseDate: '2023-07-26' },
        { title: 'Final destination', director: 'dir03', cast: 'test3', releaseDate: '2023-07-27' },
        { title: 'Harry potter', director: 'dir04', cast: 'test4', releaseDate: '2023-07-28' },
    ]
    num = 1
    showMe = true
    enableRed = true
    enableBig = false
    status = 'success'
    toDate = new Date();
    message = 'Welcome to Angular'
    price = 124;


    getTitle() {
        return this.title;
    }
    getMax(numArr: number[]) {
        return Math.max(...numArr)
    }
    clickMe() {
        return this.clickCount++
    }
    handleInput(e: any) {
        this.value = (e.target as HTMLInputElement).value
    }
}
