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
            return data
            console.log(data)
        }));
    }

}