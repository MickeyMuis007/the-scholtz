import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CompanyRoutingModule } from "./company-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CompanyRoutingModule.components],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule
  ],
  providers: [],
  exports: []
})
export class CompanyModule {

}