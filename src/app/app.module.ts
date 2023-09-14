import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { warningAlertComponent } from './warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms';
import { AsignmetComponent } from './asignmet/asignmet.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    SuccessAlertComponent,
    warningAlertComponent,
    AsignmetComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
