import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/service';
import { AppComponent } from './app.component';
import { MaterialModule } from './materail';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ROUTING } from './routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthService } from './authservice';
import { AuthGuard } from './auth.guard';
import { NotAuthGuardService } from './no-auth-guard-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { BlogComponent } from './blog/blog/blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { BlogDeleteComponent } from './blog/blog-delete/blog-delete.component';
import { FilterPipe} from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ImageUploadComponent,
    BlogComponent,
    BlogListComponent,
    BlogAddComponent,
    BlogDeleteComponent,

  ],
  
  imports: [Ng2SearchPipeModule,
    MaterialModule,ROUTING,BrowserAnimationsModule,
    BrowserModule, HttpClientModule,
    FormsModule ,CKEditorModule,
    ReactiveFormsModule,
  ],
  providers: [DataService,AuthService,AuthGuard,NotAuthGuardService
  ,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ BlogAddComponent,BlogDeleteComponent]
})
export class AppModule { }
