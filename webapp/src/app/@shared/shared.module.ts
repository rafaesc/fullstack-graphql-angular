import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ThoughtsService } from './services/thoughts.service';

import { MenuComponent } from './components/menu/menu.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MenuComponent,
    LoadingComponent,
  ],
  exports: [
    MenuComponent,
    LoadingComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        ThoughtsService,
      ]
    };
  }}
