import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-post-create', //To use the component
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredTitle = '';
    enteredContent = '';
    @Output() orderCreated = new EventEmitter(); //Output makes it an event that you can listen to from the outside
    
    onAddOrder() {
        const order = {
            title: this.enteredTitle, 
            content: this.enteredContent
        };
        this.orderCreated.emit(order)
    }
}