import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';
import { DataService } from '../../service/service';
import { BlogAddComponent } from '../blog-add/blog-add.component';
import { BlogDeleteComponent } from '../blog-delete/blog-delete.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
declare var require: any;
import { environment as env } from '../../../environments/environment';
import { AuthService } from '../../authservice';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  imgname = require("../../../../server/uploads/aman.jpg");

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  nativeWindow;
  bloglist;
  finalList = [];
  saveFlag=true;

  items= [{ name: "archie" }, { name: "jake" }, { name: "richard" }];
  public env = env;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,
    
    public dataService: DataService,private authService: AuthService) {
    this.nativeWindow = dataService.getNativeWindow();
  }

  ngOnInit() {
    this.getEmplist()
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
      startWith(''),
      map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));

  }

  getEmplist(): void {
    this.dataService.getblogList()
      .subscribe(
      data => this.getEmpdata(data),
    )
  }

  getEmpdata(data) {
    console.log(data)
    this.bloglist = data;
    this.options.push(this.bloglist.blog_name)
  }

  deleteBlog(id): void {
    const dialogRef = this.dialog.open(BlogDeleteComponent, {
      width: '550px',
      data: id,
      panelClass: 'empDialog',
      autoFocus: false
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log(id);
      if (typeof result === 'object') {
        if (result.status === true) {
          console.log(result)
          for (var i = 0; i < this.bloglist.length; i++) {
            if (this.bloglist[i].blog_id === id) {
              this.bloglist.splice(i, 1);
            }
          }
          this.openSnackBar(result.message, 'Dissmiss')
        }
      }
    });
  }

  addBlog(Updatedata,data) {
    let updatedata = {
      data: Updatedata,
      flag: data
    }
    const dialogRef = this.dialog.open(BlogAddComponent, {
      width: '550px',
      data: updatedata
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log(result);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }

  logout(){
    this.authService.logout();
  }
}