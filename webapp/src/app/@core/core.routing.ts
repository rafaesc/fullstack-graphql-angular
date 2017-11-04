import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

export const CORE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/', pathMatch: 'full'
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(CORE_ROUTES, config)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
