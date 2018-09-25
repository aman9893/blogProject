import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { NotAuthGuardService } from './no-auth-guard-service';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
export const AppRoutes: Routes = [

    
    { path: 'login', component: LoginComponent },
    { path: 'singup', component: RegisterComponent },
 
    { path: '', component: DashbordComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
    { path: 'dashbord', component: DashbordComponent ,canActivate: [AuthGuard]},
    { path: 'blog', component: BlogListComponent , canActivate: [AuthGuard]},
    { path: '**', component: DashbordComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
