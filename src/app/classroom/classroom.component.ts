import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  aulaIndex;
  constructor() { }

  ngOnInit(): void {
    this.aulaIndex = localStorage.getItem('currentLession');
    this.aulaIndex = this.aulaIndex + 1;
  }

}
