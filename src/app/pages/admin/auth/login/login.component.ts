import { Component } from '@angular/core';
// import { colourOptions } from '../../../../utils/colorPalette'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor() { }


  header = "Sign In";
  subheader = "New to Our Product?";
  subheaderLinkText = "Create an Account";
  subheaderLinkHref = "/signup";


  email = "Email";
  emailPlaceholder = "Enter Email Address";


  password = "Password";
  passwordPlaceholder = "Enter Password";

  action = "Login";

  subAction = "Forgot Password?";
  subActionHref = "/forgot-password";


  socialText = "Or sign in using:";

  googleLink = '#';

  facebookLink = '#';















  ngOnInit() {
  }

  // backgroundColour = colourOptions[0].value;



}
