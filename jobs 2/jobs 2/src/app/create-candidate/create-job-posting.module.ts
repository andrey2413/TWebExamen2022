import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateJobPostingComponent } from './create-job-posting.component';



@NgModule({
    declarations: [
        CreateJobPostingComponent
    ],
    exports: [
        CreateJobPostingComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CreateJobPostingModule { }
