import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardsComponent } from './page/list-cards/list-cards.component';
import { DetailComponent } from './page/detail/detail.component';
import { ResolveService } from './shared/service/guard/resolve.service';
import { LoginComponent } from './page/login/login.component';
import { CanactivateService } from './shared/service/guard/canactivate.service';

const routes: Routes = [
  {
    path: 'detail/:dato',
    component: DetailComponent,
    resolve: {
      resolvedData: ResolveService,
    },
    canActivate: [CanactivateService],
  },
  {
    path: 'listCard',
    component: ListCardsComponent,
    canActivate: [CanactivateService],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
