import { Injectable } from '@angular/core';
import { asapScheduler, Observable, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  loadCompanies() : Observable<any> {
    return scheduled([["companies", "test", "anwser"]], asapScheduler);
  }
}
