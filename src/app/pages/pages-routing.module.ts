import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { RegistrationComponent } from './services/registration/registration.component';
import { AccountingComponent } from './services/accounting/accounting.component';
import { AuditComponent } from './services/audit/audit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: "main", component: MainComponent },

  { path: "services", component: ServicesComponent},
  { path: "services/registration", component: RegistrationComponent },
  { path: "services/accounting", component: AccountingComponent },
  { path: "services/audit", component: AuditComponent },
  
  { path: "about-company", component: AboutCompanyComponent },
  { path: "contacts", component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }