import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Character/listar/listar.component';
import { DetailComponent } from './Character/detail/detail.component';
import { BitacoraComponent } from './Character/bitacora/bitacora.component';

const routes: Routes = [
  {path:'listar', component: ListarComponent},
  {path:'detail/:id', component: DetailComponent},
  {path:'bitacora', component: BitacoraComponent},

  { path: '', redirectTo: '/listar', pathMatch: 'full' },
  { path: '**', redirectTo: '/listar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
