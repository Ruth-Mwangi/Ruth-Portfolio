import { Component, OnInit } from '@angular/core';
import { RuthService } from '../ruth-service/ruth.service';
import { Ruth } from '../ruth-class/ruth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  
  constructor(private user:RuthService,private http:HttpClient) { 
    
  }

  ruth:Ruth;

  repos:any;

 

  ngOnInit():void {
    
      
    this.user.ruthRequest()
    this.ruth=this.user.ruth
    this.user.repoRequest();
    this.repos=this.user.repos
    
  }


}
