import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ContactComponent } from '../contact/contact.component';
import { LayoutComponent } from '../layout/layout.component';
import { ProfileComponent } from '../profile/profile.component';
import { AchievementComponent } from '../achievement/achievement.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { guardGuard } from '../services/guard.guard';
export const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path:'',component:LayoutComponent,canActivate:[guardGuard],
        children:[
            {path:'dashboard',component:DashboardComponent},
            { path: 'contact', component: ContactComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'achievement', component: AchievementComponent },
        ]
    },
    
    { path: '**', redirectTo: '' }
];
