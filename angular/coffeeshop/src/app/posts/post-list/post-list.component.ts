import { Component } from "@angular/core";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    orders = [];
    // orders = [
    //     {title: 'First order', content: 'This is the first order\'s content'},
    //     {title: 'Second order', content: 'This is the second order\'s content'},
    //     {title: 'Third order', content: 'This is the third order\'s content'}
    // ]
}