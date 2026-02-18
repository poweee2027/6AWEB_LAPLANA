import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo';
// ADD THIS LINE BELOW:
import { CustomFormComponent } from './custom-form/custom-form';

export const routes: Routes = [
  { path: 'template-form', component: TemplateDemoComponent },
  { path: 'reactive-form', component: ReactiveDemoComponent },
  { path: 'custom-form', component: CustomFormComponent }, // Error should disappear now
  { path: '', redirectTo: 'template-form', pathMatch: 'full' }
];
