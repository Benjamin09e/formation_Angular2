import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  FraisList =["Tres bon", "Moyen", "Pas bon"]
  constructor() { }

  ngOnInit(): void {
  }

}
