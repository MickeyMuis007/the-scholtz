import { Injectable } from '@angular/core';
import { asapScheduler, Observable, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  loadCompanies() : Observable<string[]> {
    return scheduled<string[]>([["Dipar", "Law For All", "Wyzetalk"]], asapScheduler);
  }
}
