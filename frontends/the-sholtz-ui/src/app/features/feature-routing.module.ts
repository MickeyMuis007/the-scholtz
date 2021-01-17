import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  { path: "", component: FeatureComponent, children: [
    { path: "company", loadChildren: () => import("./company/company.module").then(m => m.CompanyModule)}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
  static components = [ FeatureComponent ];
}