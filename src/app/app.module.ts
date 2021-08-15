import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServicesComponent } from './services/services.component';
import { AssignmenttwoComponent } from './assignmenttwo/assignmenttwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServicesComponent,
    AssignmenttwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,ServerComponent]
})
export class AppModule { }
