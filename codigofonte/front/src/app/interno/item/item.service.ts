import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItemService {

  private url = '/api/item/';

  constructor(@Inject(Http) private http: Http) {
  }


}
