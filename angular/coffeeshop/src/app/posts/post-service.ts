import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'

import { HttpClient } from '@angular/common/http'; // alot of the ones I wanted to us are deprecated 

@Injectable()
export class postService {
    result: any;

    constructor(public http: HttpClient) {}
    
    public getOrders() {
        return this.http.get('http://localhost:3000/orders/')
        .pipe(map(data => {
            console.log(data)
            return data
        }));
    }

    public postOrders(order: {}) {
        return this.http.post('http://localhost:3000/orders', order)
        .pipe(map(data => {
            console.log(data)
            return data
        }))
    }

}