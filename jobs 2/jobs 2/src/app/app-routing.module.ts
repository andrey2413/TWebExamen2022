import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPostingsComponent } from './job-postings/job-postings.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CreateCandidateComponent } from './create-job-posting/create-candidate.component';
import { CreateJobPostingComponent } from './create-candidate/create-job-posting.component';

const routes: Routes = [
  { path: 'job-postings', component: JobPostingsComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'candidate', component: CreateCandidateComponent },
  { path: 'job-posting', component: CreateJobPostingComponent },
  {
    path: '',
    redirectTo: '/job-postings',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
