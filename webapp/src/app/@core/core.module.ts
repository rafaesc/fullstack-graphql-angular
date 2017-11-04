import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, compose } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Operators
import './operators';

// Modules
import { CoreRoutingModule } from './core.routing';
import { PagesModule } from '../pages/pages.module';
import { SharedModule } from '../@shared/shared.module';

// Store
import { reducers } from '../@shared/store';

// Effects
import { ThoughtsEffects } from '../@shared/store/effects/thoughts.effect';

// Enviroment
import { environment } from '../../environments/environment';

import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      ThoughtsEffects,
    ]),
    PagesModule,
    CoreRoutingModule,
    SharedModule.forRoot(),
  ],
  declarations: [
    CoreComponent
  ],
  exports: [
    CoreComponent
  ],
})
export class CoreModule { }
