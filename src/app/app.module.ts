import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PoemaComponent } from './poema/poema.component';
import { ServiceComponent } from './service/service.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PortadaComponent } from './portada/portada.component';
import { MatInputModule } from "@angular/material";

const appRoutes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'portada', component: PortadaComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'poema', component: PoemaComponent },
  { path: '**', redirectTo: 'portada', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PoemaComponent,
    ServiceComponent,
    PortadaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
