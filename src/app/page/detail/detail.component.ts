import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  data:any;
  resolvedData: any;
  constructor(private route: ActivatedRoute,public dialog: MatDialog) { 
    this.data = this.route.snapshot.data.resolvedData;
    console.log(this.data);
  }

  ngOnInit(): void {

  }


  openDialog(data:number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {modal:data},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  segundosAMinutos(data:string) {
    var minutos = Math.floor(parseInt(data) / 60);
    var segundosRestantes = parseInt(data) % 60;
    return minutos + " minutos y " + segundosRestantes + " segundos";
  }
  

}
