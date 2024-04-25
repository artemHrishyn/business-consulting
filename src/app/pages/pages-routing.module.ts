import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { RegistrationComponent } from './services/registration/registration.component';
import { AccountingComponent } from './services/accounting/accounting.component';
import { AuditComponent } from './services/audit/audit.component';
import { CorporateAdministrationComponent } from './services/corporate-administration/corporate-administration.component';
import { TaxComponent } from './services/tax/tax.component';
import { TrademarkRegistrationComponent } from './services/trademark-registration/trademark-registration.component';
import { FiduciaryServicesComponent } from './services/fiduciary-services/fiduciary-services.component';
import { BankAccountComponent } from './services/bank-account/bank-account.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: "main", component: MainComponent },
  { path: "services", component: ServicesComponent },
  { path: "services/registration", component: RegistrationComponent },
  { path: "services/accounting", component: AccountingComponent },
  { path: "services/audit", component: AuditComponent },
  { path: "services/corporate-admin", component: CorporateAdministrationComponent },
  { path: "services/tax", component: TaxComponent },
  { path: "services/trademark-registration", component: TrademarkRegistrationComponent },
  { path: "services/fiduciary-services", component:FiduciaryServicesComponent },
  { path: "services/bank-account", component: BankAccountComponent },
  
  { path: "about-company", component: AboutCompanyComponent },
  { path: "contacts", component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }