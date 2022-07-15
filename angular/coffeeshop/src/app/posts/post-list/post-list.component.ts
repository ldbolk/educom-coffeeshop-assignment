import { Component, Input, OnInit } from "@angular/core";
import { postService } from "../post-service";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent{ // Implements OnInit
    orders: any = [];
    
    constructor(public PostService: postService) {
        this.PostService.getOrders()
        .subscribe(res => {
            this.orders = res;
            // console.log(res);
        })
    }

    // ngOnInit(){
    //     setTimeout(() => {this.ngOnInit()}, 1000 * 10 )
    // };

    // @Input() orders: any[] = [];
    
}