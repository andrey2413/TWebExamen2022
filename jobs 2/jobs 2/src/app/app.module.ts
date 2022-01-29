import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobPostingsComponent } from './job-postings/job-postings.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidatesComponent } from './candidates/candidates.component';
import { CreateJobPostingModule } from './create-candidate/create-job-posting.module';
import { CreateCandidateModule } from './create-job-posting/create-candidate.module';

@NgModule({
  declarations: [
    AppComponent,
    JobPostingsComponent,
    CandidatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CreateJobPostingModule,
    CreateCandidateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
