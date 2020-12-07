import { CadastroComponent } from './cadastro/cadastro.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent} ,
  { path: 'inicio', component: MainComponent},
    {path: 'aula', component: ClassroomComponent}
  ,
  {path: 'cadastro', component: CadastroComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
