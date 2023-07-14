import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const pageModule = () => import('./pages/pages.module').then(m => m.PagesModule)

const routes: Routes = [
  {path: '', loadChildren: pageModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
