import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Character/listar/listar.component';
import { DetailComponent } from './Character/detail/detail.component';

const routes: Routes = [
  {path:'listar', component: ListarComponent},
  {path:'detail', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
