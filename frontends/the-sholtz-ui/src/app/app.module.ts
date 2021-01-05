import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from './app.component';

import { companyReducer } from "@reducers/company.reducer";
import { CompanyEffects } from './effets/companies.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(companyReducer),
    EffectsModule.forRoot([CompanyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
