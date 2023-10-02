import {ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(routes, withViewTransitions(), withComponentInputBinding())]
};
