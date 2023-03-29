import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    RouterModule.forChild([
        {
            path: "",
            component: LoginComponent,
            pathMatch: "full"
        }
    ])
  ],
  declarations: [LoginComponent]
})
export class HomePageModule {}
