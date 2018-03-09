import { GridPageComponent } from './pages/grid-page/grid-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'grid',
    component: GridPageComponent
  },
  { path: '',
    redirectTo: '/grid',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
