import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-job-posting',
  templateUrl: './create-job-posting.component.html',
  styleUrls: ['./create-job-posting.component.scss']
})
export class CreateJobPostingComponent implements OnInit {

  form: FormGroup = new FormGroup({
    deadline: new FormControl(),
    description: new FormControl(''),
  })

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  save() {
    this.http.post('http://localhost:8080/job-postings', this.form.value).subscribe(() => {
      alert("Job saved successfuly!");
    }, () => {
      alert("SOMETHING WENT WRONG!");
    })
  }

}
