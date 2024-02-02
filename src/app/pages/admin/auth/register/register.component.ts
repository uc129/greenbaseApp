import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent extends LoginComponent {


  override header = "Sign Up";
  override subheader = "Already have an account?";
  override subheaderLinkText = "Sign In";
  override subheaderLinkHref = "/login";



  override email = "Email";


  override password = "Password";


  override action = "Create Account";

  subActionText = "By signing up, you agree to our";
  override subAction = "Terms of Service";

  override subActionHref = "/forgot-password";


  override socialText = "Or create an account using";

  override googleLink = '#';

  override facebookLink = '#';








  override ngOnInit() {
  }

}
