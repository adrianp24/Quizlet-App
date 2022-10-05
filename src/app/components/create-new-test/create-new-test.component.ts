import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-create-new-test',
  templateUrl: './create-new-test.component.html',
  styleUrls: ['./create-new-test.component.css']
})
export class CreateNewTestComponent implements OnInit {
  test?: Test;
  constructor() { }

  ngOnInit(): void {
  }

}
