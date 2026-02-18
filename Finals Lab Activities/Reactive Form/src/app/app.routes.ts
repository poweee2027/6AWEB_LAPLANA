import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo';

export const routes: Routes = [
  // The paths here must match routerLink="/path" in your HTML
  { path: 'template-form', component: TemplateDemoComponent },
  { path: 'reactive-form', component: ReactiveDemoComponent },
  { path: '', redirectTo: 'template-form', pathMatch: 'full' }
];
