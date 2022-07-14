import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, switchMap, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable({providedIn: 'root'})
export class OrderService {
    constructor(private http: HttpClient) {}

    getOrder(order: any) {
        this.http.get('http://localhost:3000/we', order).pipe(map(data => {})).subscribe(result => {
            return result;
            console.log(result);
        })
    }

    postOrder(order: any) {
        this.http.post('http://localhost:3000/*', order).pipe(map(data => {})).subscribe(result => {
            return result
            console.log(result);
        })
    }
}
