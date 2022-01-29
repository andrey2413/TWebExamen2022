import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobPosting } from './job-posting';

@Component({
  selector: 'app-job-postings',
  templateUrl: './job-postings.component.html',
  styleUrls: ['./job-postings.component.scss']
})
export class JobPostingsComponent implements OnInit {

  jobs: Array<JobPosting> = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/job-postings')
      .subscribe((jobs) => {
        if (jobs && jobs.length) {
          this.jobs = jobs;
        }
      });
  }

}
