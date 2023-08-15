import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MoviesService } from '../../service/movies/movies.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private movie:MoviesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  } 
  isText:any =this.data.modal==1;

  ngOnInit(): void {
  }

  onNoClick(){
    
    const rate = document.getElementById('rate') as HTMLSelectElement;
    const note = document.getElementById('note') as HTMLSelectElement;
    console.log(this.isText)
    this.movie.send(this.isText ? note.value : rate.value, this.isText).subscribe((reponse:any)=>{
      console.log("ejecutando")
    });
    this.dialogRef.close();
  }



}
