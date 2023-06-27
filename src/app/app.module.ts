import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Character/listar/listar.component';
import { DetailComponent } from './Character/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { BitacoraComponent } from './Character/bitacora/bitacora.component';
import { NavbarComponent } from './Global/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    DetailComponent,
    BitacoraComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
