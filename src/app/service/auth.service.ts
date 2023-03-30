import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }
  // apiurl = 'http://localhost:3000/user';
  // heroku URI: https://authentication-server-app.herokuapp.com
  apiurl = 'https://my-json-server.typicode.com/lithdoh/authentication-server/user';
  

  RegisterUser(inputdata: any) {
    return this.http.post(this.apiurl, inputdata)
  }
  GetUserbyCode(id: any) {
    return this.http.get(this.apiurl + '/' + id);
  }
  Getall() {
    return this.http.get(this.apiurl);
  }
  updateuser(id: any, inputdata: any) {
    return this.http.put(this.apiurl + '/' + id, inputdata);
  }
  getuserrole() {
    // return this.http.get('http://localhost:3000/role');
    // heroku URI: https://authentication-server-app.herokuapp.com
    return this.http.get('https://my-json-server.typicode.com/lithdoh/authentication-server/role');
    
  }
  isloggedin() {
    return sessionStorage.getItem('username') != null;
  }
  getrole() {
    return sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : '';
  }
  GetAllCustomer() {
    // return this.http.get('http://localhost:3000/customer');
    // heroku URI: https://authentication-server-app.herokuapp.com
    return this.http.get('https://my-json-server.typicode.com/lithdoh/authentication-server/customer');
    
  }
  Getaccessbyrole(role: any, menu: any) {
    // return this.http.get('http://localhost:3000/roleaccess?role=' + role 
    // heroku URI: https://authentication-server-app.herokuapp.com
    return this.http.get('https://my-json-server.typicode.com/lithdoh/authentication-server/roleaccess?role=' + role 
    + '&menu=' + menu)
  }
}
