import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowinfoComponent } from './showinfo/showinfo.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '', 
    component: DefaultComponent
  },
  {
    path: 'mfe',
    loadChildren: () => import('./showinfo/showinfo.module').then(m => m.ShowinfoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
