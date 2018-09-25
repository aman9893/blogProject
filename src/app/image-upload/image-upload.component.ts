import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/service';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  filesToUpload: Array<File> = [];
  product;
  constructor(private dataService: DataService) {}

  imageDataList;
  ngOnInit() {
    
  }
  // name = new FormControl('');

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);
    
    this.dataService.uploadimage(formData)
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
   
    this.imageDataList.photo = fileInput.target.files[0]['name'];
  }
}