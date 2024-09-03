import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { BASE_URL } from '../enviroment/global.environment';
import { CommonModule } from '@angular/common';
import { Resident } from '../model/resident.model';
import { CommonService } from '../services/common/common.service';
import { requestmodal } from '../model/request.model';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] // Correct property name
})

export class ProfileComponent implements OnInit {
  common = inject(CommonService)
  constructor(private http: HttpClient) { }
  record : Resident[]=[];
  ngOnInit():void
  {

    var request:requestmodal={
      url:"api/Resident/Get",
      data:{}
    }

    this.common.getData(request).subscribe(({
      next:(v)=>{
        this.record=v;
      },
      error:(e)=>{
        console.error("something went wrong",e);
      },
      complete:()=>{
        console.log('completed');
      }
    }));
  }
}

