import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class OrderService {
    constructor(private http: Http) {}
    getOrder(order: any) {
        return this.http.post('http://localhost:3000/*', order)
        .map((res: Response) => res.json())
    }

}