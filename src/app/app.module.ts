import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCardsComponent } from './page/list-cards/list-cards.component';
import { LoginComponent } from './page/login/login.component';
import { CardComponent } from './shared/component/card/card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './shared/interceptors/http-interceptor.service';
import { HeaderComponent } from './shared/component/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { DetailComponent } from './page/detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { moviesDetailReducer, moviesReducer } from './shared/state/reducers/game.reducer';
import { PaginatorComponent } from './shared/component/paginator/paginator.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ListCardsComponent,
    LoginComponent,
    CardComponent,
    HeaderComponent,
    DetailComponent,
    PaginatorComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    StoreModule.forRoot({movies:moviesReducer,movie:moviesDetailReducer})
  ],  
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
