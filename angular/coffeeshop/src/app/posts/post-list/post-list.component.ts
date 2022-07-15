import { Component, Input } from "@angular/core";
import { postService } from "../post-service";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    // orders = [
    //     {title: 'First order', content: 'This is the first order\'s content'},
    //     {title: 'Second order', content: 'This is the second order\'s content'},
    //     {title: 'Third order', content: 'This is the third order\'s content'}
    // ]
    orderList: any[] = [];
    
    constructor(public PostService: postService) {
        this.PostService.getOrders()
        .subscribe(res => {
            console.log(res);
        })
    }

    @Input() orders: any[] = [];
    
}