import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CompanyService } from '@services/company.service';
import * as companyActions from "@actions/company.actions";
import { map, switchMap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class CompanyEffects {
  @Effect() loadCompanies = this.actions$.pipe(
    ofType(companyActions.LOAD_COMPANIES),
    switchMap(() => this.companyService.loadCompanies().pipe(
      map(companies => {
        return new companyActions.LoadCompaniesSuccessAction(companies)})
    ))
  )
  
  constructor(
    private companyService: CompanyService, 
    private actions$: Actions
  ) { }
 
}