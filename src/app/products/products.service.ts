import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import {  Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(readonly http: HttpClient, readonly sharedService: SharedService) {
  }

  /**
   * get list of products
   */
  getAllProducts(): Observable<any> {
    return this.http.get(environment.APIS.products).pipe(catchError(this.sharedService.handleError));
  }
}
