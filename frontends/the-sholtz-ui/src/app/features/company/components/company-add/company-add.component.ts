import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "company-company-add",
  templateUrl: "./company-add.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyAddCompent implements DoCheck {
  @Input() companies: string[] | null = [];
  @Output() addCompanyEvent = new EventEmitter<string>();
  company = "";

  ngDoCheck() {
    console.log("doCheck");
  }

  addCompany() {
    if (this.company)
      this.addCompanyEvent.emit(this.company);
  }
}