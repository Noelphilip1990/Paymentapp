import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'pay', component: PaymentComponent}
];
