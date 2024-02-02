import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/auth/login/login.component';
import { RegisterComponent } from './pages/admin/auth/register/register.component';
import { ForgotPasswordComponent } from './pages/admin/auth/forgot-password/forgot-password.component';
import { ConfirmEmailComponent } from './pages/admin/auth/confirm-email/confirm-email.component';
import { ConfirmationEmailSentComponent } from './pages/admin/auth/confirmation-email-sent/confirmation-email-sent.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'confirm-email',
        component: ConfirmEmailComponent
    },
    {
        path: 'confirmation-email-sent',
        component: ConfirmationEmailSentComponent
    },
    {
        path: 'admin',
        component: DashboardComponent

    }
];
