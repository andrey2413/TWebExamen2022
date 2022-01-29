import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCandidateComponent } from './create-candidate.component';



@NgModule({
    declarations: [
        CreateCandidateComponent
    ],
    exports: [
        CreateCandidateComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CreateCandidateModule { }
