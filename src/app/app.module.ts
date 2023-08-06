import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCardsComponent } from './page/list-cards/list-cards.component';
import { LoginComponent } from './page/login/login.component';
import { CardComponent } from './shared/component/card/card.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './shared/interceptors/http-interceptor.service';
import { HeaderComponent } from './shared/component/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    ListCardsComponent,
    LoginComponent,
    CardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule,
    MatToolbarModule    
  ],  
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
