import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../service/service';

@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {
  id: any;
  constructor(public dialogRef: MatDialogRef<BlogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public EmpId: any,
    private dataService: DataService) { }

  ngOnInit() {
    console.log(this.EmpId)
   }

   deleteContactType() {

    this.id = this.EmpId
    console.log(this.id)

    this.dataService.deleteblog(this.id).subscribe(
      data => this.closeDialog(data),
      error => this.closeDialog(error)
    )
  }
  closeDialog(data) {
    if(data.status===true){
      console.log(data)
      this.dialogRef.close(data);
    }
  }
  
  close(){
    this.dialogRef.close();
  }
  
}
