import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  users: User[] = [];
constructor(private http:HttpClient){
}
 ngOnInit():void
  {
     this.http.get<User[]>("https://jsonplaceholder.typicode.com/users").subscribe((res)=>{
      this.users  = res;
      console.table(res);
    });
  }
}
