import { Component,ViewChild, OnInit, Input, Inject, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../service/service';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent, MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material';

import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';

  formStatus = false;
  saveFlag;

  filesToUpload: Array<File> = [];
  product;
  formData: any ;

  constructor(
    private formBuilder: FormBuilder, private dataService: DataService,
    public dialogRef: MatDialogRef<BlogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public update_data: any, public snackBar: MatSnackBar) {
    }

  blogAddForm: FormGroup;
  updateValue;
  updateFlag=false;
  imageUpload='';
  @ViewChild("ckeditorContent") ckeditor: any;
  ckeditorContent;
  descriptipnData;

  ngOnInit() {
    console.log(this.update_data)
    if (this.update_data !== null) {
      this.updateValue = this.update_data.data
      this.updateFlag=this.update_data.flag;
      this.saveFlag = this.update_data.flag;
      this.ckeConfig = {
        allowedContent: false,
        extraPlugins: 'divarea',
        forcePasteAsPlainText: true
      };

    }

    this.formStatus = true;
    this.createForm();
  }

  editorChange(){

  }
  onChange(event): void {
    console.log(event);
  }

  onBlur(event){
    console.log(event);

    console.log(event.editor._.data);
    this.descriptipnData = event.editor._.data;

  }
  getValue() {
    this.mycontent = this.ckeditorContent.getEditor().getData();
    console.log(this.mycontent);
  }


  imageDataList;
  // name = new FormControl('');

  upload() {
     this.formData = new FormData();
    const files: Array<File> = this.filesToUpload;

    this.formData.append("uploads[]", files[0], files[0]['name']);

    this.dataService.uploadimage(this.formData)
      .subscribe(
        data => this.imageData(data)
      )
  }

  imageData(data){
     this.imageDataList=data
     console.log(this.imageDataList)
  }

  fileChangeEvent(fileInput: any) {
    console.log(fileInput)
    this.filesToUpload = <Array<File>>fileInput.target.files;
      this.imageUpload = fileInput.target.files[0]['name'];
      console.log( this.imageUpload)
  }


  private createForm() {

    this.blogAddForm = this.formBuilder.group({

      blog_name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      blog_description: new FormControl(this.mycontent, {
        updateOn: 'change'
      }),
      blog_image: new FormControl('', {
      }),

      blog_date: new FormControl('', {

      }),
      blog_like: new FormControl(false),

    });

    if (this.updateValue !== undefined) {
      this.saveFlag = false;
      this.mycontent = this.updateValue.blog_description;
      this.blogAddForm.controls['blog_name'].setValue(this.updateValue.blog_name)
      this.blogAddForm.controls['blog_description'].setValue(this.updateValue.blog_description)
      this.imageUpload = this.updateValue.blog_image;
      this.blogAddForm.controls['blog_date'].setValue(this.updateValue.blog_date)
      this.blogAddForm.controls['blog_like'].setValue(this.updateValue.blog_like)
    }
  }

  getError() {
    return ' *This is required feild'
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['app-bottom-snackbar']
    });
  }
  blogNameValid() {
    return " blog Name  is Required Feild"
  }

  blogDeValid() {
    return "Description is Required Feild"
  }

  onSubmit() {

    if (this.blogAddForm) {
      console.log(this.blogAddForm.value)
      let blogAddFormData = {
        blog_name: this.blogAddForm.controls['blog_name'].value,
        blog_description: this.descriptipnData,
        blog_image:this.imageUpload,
        blog_date:  new Date(),
        blog_like: this.blogAddForm.controls['blog_like'].value,
      }

      console.log(blogAddFormData)
      this.dataService.postblogData(blogAddFormData).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )
    }
    this.blogAddForm.reset();
  }

  closeDialog(data) {
    console.log(data)
    this.openSnackBar(data.message, 'Dissmiss')
    this.dialogRef.close(data);
  }
  cancel(): void {
    this.blogAddForm.reset();
    this.dialogRef.close();
  }

  onUpdate() {

    if (this.blogAddForm.valid) {

      console.log(this.blogAddForm.value)
      let blogAddFormData = {
        blog_id:this.updateValue.blog_id,
        blog_name: this.blogAddForm.controls['blog_name'].value,
        blog_description: this.blogAddForm.controls['blog_description'].value,

        blog_image:this.imageUpload,
        blog_date:  new Date(),
        blog_like: this.blogAddForm.controls['blog_like'].value,
      }

      console.log(blogAddFormData)

      this.dataService.updateblog(blogAddFormData).subscribe(
        data => this.closeDialog(data),
        err => console.log(err)
      )
    }
    this.blogAddForm.reset();
  }

}
