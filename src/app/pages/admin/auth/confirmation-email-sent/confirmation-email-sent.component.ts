import { Component } from '@angular/core';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-confirmation-email-sent',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-email-sent.component.html',
  styleUrl: './confirmation-email-sent.component.css'
})
export class ConfirmationEmailSentComponent extends ForgotPasswordComponent {

  override header: string = 'Almost There!'
  override subheader: string = 'Check your email inbox and confirm your account'

  override subActionText: string = "Didn't receive an email?"
  override subAction: string = 'Resend Confirmation'

}
