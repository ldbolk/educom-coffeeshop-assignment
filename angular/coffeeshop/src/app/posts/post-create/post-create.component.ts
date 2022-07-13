import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-post-create', //To use the component
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredType = '';
    enteredContent = '';
    @Output() orderCreated = new EventEmitter(); //Output makes it an event that you can listen to from the outside
    
    onAddOrder(form: NgForm) {
        if (form.invalid) {
            return;
        }
        const order = {
            cType: form.value.cType, 
            content: form.value.content
        };
        this.orderCreated.emit(order)
    }
}