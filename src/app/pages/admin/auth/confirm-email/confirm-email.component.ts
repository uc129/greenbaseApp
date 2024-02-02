import { Component } from '@angular/core';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-confirm-email',
  standalone: true,
  imports: [],
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.css'
})
export class ConfirmEmailComponent extends ForgotPasswordComponent {


  override header = "Confirm Email";
  override subheader = "Check Your Email and Enter Confirmation Code ";
  override subheaderLinkText = "Sign In";
  override subheaderLinkHref = "/login";

  override email = "Confirmation Code";
  override emailPlaceholder = "Enter Code";

  override action = "Confirm Email";


  override subActionText = "Have'nt received your code?";
  override subAction = "Resend Code";
  override subActionHref = "#";

}
