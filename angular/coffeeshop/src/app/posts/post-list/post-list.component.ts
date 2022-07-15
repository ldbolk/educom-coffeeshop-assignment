import { Component, Input } from "@angular/core";
import { postService } from "../post-service";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    orders: any;
    
    constructor(public PostService: postService) {
        this.PostService.getOrders()
        .subscribe(res => {
            this.orders = res;
            console.log(res);
        })
    }

    // @Input() orders: any[] = [];
    
}