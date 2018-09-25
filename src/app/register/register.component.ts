import { Component, OnInit, Input, Inject, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from'../service/service';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private myRoute: Router, private dataService: DataService) { }

  sginupForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.sginupForm = this.formBuilder.group({

      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
    });
  }

  getError() {
    return ' *This is required feild'
  }
  cancel(): void {
    this.sginupForm.reset();
  }

  onSubmit() {

    if (this.sginupForm.valid) {
      console.log(this.sginupForm.value)
      this.dataService.registerData(this.sginupForm.value).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )}
      this.sginupForm.reset();
  }

  closeDialog(data) {
     console.log(data.messsage)
     if(data.status== true){
      this.openSnackBar(data.message, 'Dissmiss')
      this.myRoute.navigate(["login"]);
     }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
}
