import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { loginmodel } from '../model/login.model';
import { requestmodal } from '../model/request.model';
import { CommonService } from '../services/common/common.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginError: string | null = null;
   router = inject(Router);
   common = inject(CommonService);
  constructor(private toastrservice:ToastrService){}
  ngOnInit(): void {
    this.toastrservice.success("Welcome 🙏");
  }
  onSubmit() {
    
    var login : loginmodel = {
      Username:this.username,
      Password:this.password,
      token:'',
      user:'',
      statusCode:0
     }

     var request :requestmodal={
      url:"Authentication/login",
      data:login
      }

    this.common.postData(request).subscribe(({
      next:(v)=>{
        if(v.statusCode==200){
        localStorage.setItem("token", v.token);
        localStorage.setItem("user", v.user);
        this.router.navigate(["dashboard"]);
        }
      },
      error:(e)=>{
        this.loginError='please enter valid credentials';
        console.error("something went wrong");
      },
      complete:()=>{
        console.log("completed");
      }
    }));
    
  }
}
