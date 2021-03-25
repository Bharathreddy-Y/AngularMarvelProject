import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersidComponent } from './charactersid/charactersid.component';
import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';
import { HttpClientModule} from '@angular/common/http';
import { CreatorsComponent } from './creators/creators.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { MatCardModule} from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { CdkTableModule} from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSortModule} from '@angular/material/sort';
import { DetailscomponentComponent } from './detailscomponent/detailscomponent.component'
import {MatDialogModule} from '@angular/material/dialog';
import { MainComponent } from './main/main.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    ParentComponent,
    ChildComponent,
    CharactersComponent,
    CharactersidComponent,
    ComicsComponent,
    EventsComponent,
    SeriesComponent,
    StoriesComponent,
    CreatorsComponent,
    DashboardComponent,
    DetailscomponentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
