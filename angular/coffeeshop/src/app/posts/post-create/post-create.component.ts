import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { postService } from '../post-service';

@Component({
    selector: 'app-post-create', //To use the component
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredType = '';
    enteredContent = '';

    @Output() orderCreated = new EventEmitter(); //Output makes it an event that you can listen to from the outside
    
    constructor(public PostService: postService) {}

    addOrder(data: {}) {
        this.PostService.postOrders(data)
        .subscribe(res => {
            console.log(res);
        })
    }

    onAddOrder(form: NgForm) {
        if (form.invalid) {
            return;
        }
        if (form.value.checkMilk == '') {
            form.value.checkMilk = false
        }
        if (form.value.checkSugar == '') {
            form.value.checkSugar = false;
        }
        const order = {
            cType: form.value.cType, 
            content: form.value.content,
            Milk: form.value.checkMilk,
            Sugar: form.value.checkSugar
        };
        this.addOrder(order);
        // this.orderCreated.emit(order)
    }
}