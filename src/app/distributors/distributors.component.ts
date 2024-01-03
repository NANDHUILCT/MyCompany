import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent {



  httpdata:any;
  constructor(public usersServiceObj:UsersService){}

  ngOnInit():void{
    this.usersServiceObj.getUsers()
.subscribe((users)=>{
  this.httpdata=users;
  console.log(this.httpdata);
})
  }

}
