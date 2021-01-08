import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyAddCompent } from './components/company-add/company-add.component';

const routes: Routes = [
  {
    path: "", component: CompanyComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: "list", component: CompanyListComponent },

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
  static components = [
    CompanyComponent,
    CompanyListComponent,
    CompanyAddCompent
  ]
}