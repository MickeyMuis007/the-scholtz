import { Component, OnInit } from '@angular/core';
import { AppState } from '@models/app-state';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import * as companyActions from "@actions/company.actions";
import { CompanyService } from '@services/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  companies$?: Observable<string[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.getCompanies();
    this.companies$ = this.store.select(state => {
      return state?.companies?.companies;
    });
  }

  getCompanies() {
    this.store.dispatch(new companyActions.LoadCompaniesAction())
  }
}
