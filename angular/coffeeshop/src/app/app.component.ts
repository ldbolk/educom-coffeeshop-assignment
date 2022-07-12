import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  storedOrders: any[] = [];
  onOrderAdded(order: any) {
    this.storedOrders.push(order);
  }
}
