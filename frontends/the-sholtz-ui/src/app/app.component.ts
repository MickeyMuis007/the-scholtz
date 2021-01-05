import { Component, OnInit } from '@angular/core';
import { AppState } from '@models/app-state';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import * as companyActions from "@actions/company.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  companies$?: Observable<string[]>;
  companies?: string[] = ['test'];

  constructor(private store: Store<AppState>) { 
    this.companies$ = this.store.select(state => state.companies);
  }

  ngOnInit() {
    this.companies$?.subscribe((companies) => {
      console.log(companies)
      this.companies = companies;
    });
    this.getCompanies();
  }

  getCompanies() {
    this.store.dispatch(new companyActions.LoadCompaniesAction())
  }
}
