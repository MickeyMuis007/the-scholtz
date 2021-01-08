import { Component, OnInit } from "@angular/core";
import { AppState } from '@models/app-state';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import * as companyActions from "@actions/company.actions";

@Component({
  selector: "company-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"]
})
export class CompanyListComponent implements OnInit {
  companies$?: Observable<string[]>;
  companies: string[] = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.getCompanies();
    this.companies$ = this.store.select(state => {
      return state?.companies?.companies;
    });
    this.companies$.subscribe((companies) => {
      this.companies = companies;
    })
  }

  getCompanies() {
    this.store.dispatch(new companyActions.LoadCompaniesAction())
  }

  addCompany(company: string) {
    this.companies = this.companies.map(t => t);
    this.companies.push(company);
  }
}