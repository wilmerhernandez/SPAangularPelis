import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardsComponent } from './page/list-cards/list-cards.component';

const routes: Routes = [
  { path: 'listCard', component: ListCardsComponent },
  { path: '**', redirectTo: 'listCard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
