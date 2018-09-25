import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { concat } from 'rxjs/internal/observable/concat';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  /* ============ Pipeline api call Url function ================ */
  //  getList() {
  //     return this.http.get(ApiConfig.apiUrl + '' + ApiConfig.apiPath + '' + SettingConfig.setting_get_pipeline_url);
  // }

  registerData(message) {
    return this.http.post('http://localhost:8000/api/register', message);
  }

  loginData(message) {
    return this.http.post('http://localhost:8000/api/login', message);
  }


  getblogList() {
    return this.http.get('http://localhost:8000/api/blog_list');
  }
  postblogData(message) {
    return this.http.post('http://localhost:8000/api/add_blog', message);
  }

  deleteblog(id) {
    return this.http.delete('http://localhost:8000/api/delete_blog' + '/' + id);
  }

  updateblogStatus(data: any){
    console.log('http://localhost:8000/api/update_bloglist',data)
    return this.http.put('http://localhost:8000/api/update_bloglist',data);
  }

  updateblog(data) {
    return this.http.put('http://localhost:8000/api/update_blog',data);
  }

    getNativeWindow() {
      return window;
    
  }

uploadimage(message){
  return this.http.post('http://localhost:8000/upload', message);
}

  private empValue = new BehaviorSubject<string>("");
  empData = this.empValue.asObservable();
  empList(message: string) {
    this.empValue.next(message)
  }

}
