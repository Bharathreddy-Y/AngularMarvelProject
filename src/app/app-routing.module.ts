import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersidComponent } from './charactersid/charactersid.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailscomponentComponent } from './detailscomponent/detailscomponent.component';
import { EventsComponent } from './events/events.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './parent/parent.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';


const routes : Routes = [
  {path:'',redirectTo:"HomeApp",pathMatch:'full'},
  {path:'HomeApp',component:HomeComponentComponent},
  {path:'Home',component:MainComponent},
  // {path:'',redirectTo:"dashboard", pathMatch: 'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"dashboard/:id",component:CharactersidComponent},
  {path:"comics/:id",component:ComicsComponent},
  {path:"creators/:id",component:CreatorsComponent},
  {path:"events/:id",component:EventsComponent},
  {path:"series/:id",component:SeriesComponent},
  {path:"stories/:id",component:StoriesComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
