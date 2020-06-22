import { Component, OnInit } from '@angular/core';
import { RuthService } from '../ruth-service/ruth.service';
import { Ruth } from '../ruth-class/ruth';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  

  constructor(private user:RuthService) { 
    
  }

  ruth:Ruth;

  


  ngOnInit():void {

    this.user.ruthRequest()

    this.ruth=this.user.ruth
    
    
  }


}
