import { Routes } from '@angular/router';
// UPDATED: Removing '.component' from the import path to match your file name
import { TemplateDemoComponent } from './template-demo/template-demo';

export const routes: Routes = [
  { path: '', redirectTo: 'template-form', pathMatch: 'full' },
  { path: 'template-form', component: TemplateDemoComponent }
];
