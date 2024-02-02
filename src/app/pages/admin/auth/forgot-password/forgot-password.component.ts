import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent extends LoginComponent {


  override header = "Forgot Password";
  override subheader = "We Will help you reset Your Password";
  override subheaderLinkText = "Sign In";
  override subheaderLinkHref = "/login";

  override email = "Email";
  override emailPlaceholder = "Enter your email address";

  override action = "Reset Password";


  subActionText = "Remember your password?";
  override subAction = "Back to Sign In";
  override subActionHref = "/login";


}
