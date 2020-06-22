import { Injectable } from '@angular/core';
import { Ruth } from '../ruth-class/ruth';
import { RuthRepo } from '../ruth-class/ruth-repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RuthService {

  ruth:Ruth;
  repos:RuthRepo;

  constructor(private http:HttpClient) {

    this.ruth=new Ruth("","")
    this.repos=new RuthRepo([])
    
   }

  ruthRequest(){

    interface ApiResponse{
      name:string
      avatar_url:string

      
    }

    let promise=new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.ruthApiUrl).toPromise().then(response=>{
        this.ruth.name=response.name;
        this.ruth.avatar_url=response.avatar_url
        
        
        resolve()
      },error=>{reject(error)})
      
    })

    return promise
  }

  repoRequest(){
    
    
    interface ApiResponse{
      items:any
    }

   
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.rururepo).toPromise().then(response=>{
        this.repos.items=(response.items)
        
        resolve()
      },error=>{ reject(error)})
    })

    
    return promise;
  }
}
