import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
    @Input() text: string[] = []
    noOfTitles = 0
    ngOnInit(): void {
        console.log("ngOnInit called")
        this.text.push('ngOnInit value')
        this.noOfTitles = 1
    }
    ngOnChanges(changes: SimpleChanges): void {
        // if (!changes['text'].isFirstChange()) {
        //     console.log("Changes modified")
        // }
        console.log('ngOnChanges called')
        // console.log('Heading component input changed:', changes['text'])
    }
    ngDoCheck(): void {
        if (this.text.length > this.noOfTitles) {
            console.log('ngDocheck called')
            console.log("Changes modified")
            this.noOfTitles++
            console.log(this.noOfTitles)
        }
    }
    ngOnDestroy(): void {
        console.log(`ngOnDestory called`)
    }

}
