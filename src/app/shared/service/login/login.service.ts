import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  constructor(private http: HttpClient,private route:Router) { }

logOut(){
  localStorage.removeItem('token');
  this.route.navigate(['/login']);
}
  login(user:string,password:string){
    const url = environment.oauthEndpoint;

    const data = {
      email: user,
      password: password
    }

   this.http.post<any[]>(url, data).subscribe((response:any)=>{
    console.log(response);
    if(response.accessToken){
      localStorage.setItem("token",response.accessToken);
      this.route.navigate(['/listCard']);
    }
    
   });
  }



}
