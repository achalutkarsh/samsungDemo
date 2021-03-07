import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/smartphones' },
  // { path: 'smartphones', pathMatch: 'full', redirectTo: 'smartphones/note' },
  {
    path: 'smartphones',
    loadChildren: () => import('./phones/phones.module').then(m => m.PhonesModule),
  },
  { path: '**', redirectTo: '/404' },
  // { path: '404', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
