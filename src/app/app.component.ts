import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LoginService } from './login/login.service';
import { UserInformationservice } from './service/user-information.service';
import { FacebookLogin } from '@capacitor-community/facebook-login';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
}
