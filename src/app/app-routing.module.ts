import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { LoginComponent } from './pages/login/login.component';

import { AdminGuard } from './guards/admin.guard';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'edit',
    component: EditorComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
