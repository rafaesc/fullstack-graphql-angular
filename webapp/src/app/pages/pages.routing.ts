import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: 'thoughts', loadChildren: './thoughts/list/list.module#ListModule' },
      { path: 'thoughts/create', loadChildren: './thoughts/create/create.module#CreateModule' },
      { path: 'thoughts/:id', loadChildren: './thoughts/view/view.module#ViewModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(PAGES_ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
