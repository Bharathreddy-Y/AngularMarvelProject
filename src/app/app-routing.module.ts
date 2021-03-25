import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailscomponentComponent } from './detailscomponent/detailscomponent.component';
import { MainComponent } from './main/main.component';


const routes : Routes = [
  {path:'',redirectTo:"Home",pathMatch:'full'},
  {path:'Home',component:MainComponent}
];
// const routes: Routes = [
//   {path:'',redirectTo:"dashboard", pathMatch: 'full'},
//   {path:"dashboard",component:DashboardComponent,
//     children:[
//       {path:"comics",component:ComicsComponent},
//       {path:'detailsId/:id/detailsName/:name',component:DetailscomponentComponent}
//     ]
//   },
  
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
