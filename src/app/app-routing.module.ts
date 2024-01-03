import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { PhoneComponent } from './phone/phone.component';
import { DistributorsComponent } from './distributors/distributors.component';

const routes: Routes = [{path:'',component:HomeComponent},
       {path:'users',component:UsersComponent}   ,
       {path:'aboutus',component:AboutusComponent},
       {path:'contactus',component:ContactComponent,
        children:[
                  {path:'address',component:AddressComponent},
                  {path:'phone',component:PhoneComponent}
                 ]},
                 {path:'distributors',component:DistributorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
