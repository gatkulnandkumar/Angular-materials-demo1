import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog :MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogExampleComponent, {
      data: {
        animal: 'panda',
      },
    });
     
  }

}
