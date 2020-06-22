import { Component, OnInit } from '@angular/core';
import { RuthService } from '../ruth-service/ruth.service';
import { Ruth } from '../ruth-class/ruth';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private user:RuthService) { 
    
  }

  ruth:Ruth;


  ngOnInit():void {

    this.user.ruthRequest()

    this.ruth=this.user.ruth
    
    
  }

}
