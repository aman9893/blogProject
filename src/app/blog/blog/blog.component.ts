import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../authservice';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private authService: AuthService,public router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }
  createLibraryDialog(){
    this.router.navigate(['/booklist']);
  }
}