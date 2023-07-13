import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Ramzy Ahmed';
    titles: string[] = []
    disableHeading = false
    addTitle() {
        this.titles.push(this.title)
        console.log(this.titles)
    }
}
