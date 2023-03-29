import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewAdComponent } from './new-ad.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewAdComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbInputModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbRadioModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewAdComponent,
        pathMatch:'full'
      }
    ])
  ]
})
export class NewAdModule { }
