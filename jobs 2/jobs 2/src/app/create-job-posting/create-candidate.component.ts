import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss']
})
export class CreateCandidateComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    resume: new FormControl(''),
    email: new FormControl(''),
  })

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  save() {
    this.http.post('http://localhost:8080/candidates', this.form.value).subscribe(() => {
      alert("Candidate saved successfuly!");
    }, () => {
      alert("SOMETHING WENT WRONG!");
    })
  }

}
