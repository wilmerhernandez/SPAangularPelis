import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardsComponent } from './page/list-cards/list-cards.component';
import { DetailComponent } from './page/detail/detail.component';
import { ResolveService } from './shared/service/guard/resolve.service';

const routes: Routes = [
  { path: 'detail/:dato', component: DetailComponent, resolve: {
    resolvedData: ResolveService 
  } },
  { path: 'listCard', component: ListCardsComponent },
  { path: '**', redirectTo: 'listCard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
