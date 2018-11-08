import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InternoService {

    private url = '/api/inicio/';

    constructor(@Inject(Http) private http: Http) {
    }

}
