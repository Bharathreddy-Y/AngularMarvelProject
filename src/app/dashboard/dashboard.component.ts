import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiServicesService } from '../api-services.service';
import { dataclass, dataField } from '../Modules/DataModule';
// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material'
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {

  public Characters : dataclass = new dataclass()
  public Comics : dataclass = new dataclass()
  public Creators : dataclass = new dataclass()
  public Events : dataclass = new dataclass()
  public Series : dataclass = new dataclass()
  public Stories : dataclass = new dataclass()
  dataSource : any = [];
  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  // @ViewChild(MatSort) sort: MatSort | undefined;
  // dataSource = new MatTableDataSource(this.Characters.marvel);
  constructor(private service : ApiServicesService) { }

  characterColumns: string[]=[
    'id',
    'name',
    'description',
    'modified',
  ]
  comicsColumns: string[]=[
    'id',
    'title',
    'issueNumber',
    'variantDescription'
  ]
  seriesColumns : string[]=[
    'id',
    'title',
    'description',
    'resourceURI',
    'startYear',
    'endYear'
  ]
  eventsColumns : string[]=[
    'id',
    'title',
    'description',
    'resourceURI',
  ]
  creatorsColumns : string[]=[
    'id',
    'firstName',
    'collectionURI',
    'modified',
    'resourceURI',
  ]
  storiesColumns : string[]=[
    'id',
    'title',
    'resourceURI',
    'modified'

  ]
  
  showCharacter : boolean = false
  showComics : boolean = false
  showEvents : boolean = false
  showCreators : boolean = false
  showSeries : boolean = false
  showStories : boolean = false

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  handlePage(event:PageEvent){
    console.log(event)
    this.length = event.length
    this.pageSize = event.pageSize
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    // setTimeout(() => this.dataSource.paginator = this.paginator,3000);
    let character = this.service.getConfig()
    let comics = this.service.getComics()
    let creators = this.service.getCreators()
    let events = this.service.getEvents()
    let series = this.service.getSeries()
    let stories = this.service.getStories()
    forkJoin([character,comics,creators,events,series,stories]).subscribe(response=>{
      this.Characters.marvel = response[0].data.results;
      this.Comics.marvel= response[1].data.results;
      this.Creators.marvel= response[2].data.results;
      this.Events.marvel = response[3].data.results;
      this.Series.marvel= response[4].data.results;
      this.Stories.marvel= response[5].data.results;
      // console.log(this.Characters.marvel,this.Comics.marvel,this.Creators.marvel,this.Events.marvel,this.Series.marvel,this.Stories.marvel)
    }) ;
    setTimeout( ()=>{
      this.charater()
    },3000)
    
  }
  charater(){
    this.showCharacter =true;
    this.showComics =false
    this.showEvents = false
    this.showSeries =false
    this.showCreators=false
    this.showStories = false
    // console.log(this.showCharacter)
    this.dataSource = new MatTableDataSource(this.Characters.marvel);
    console.log('marver', this.Characters.marvel);
    // console.log(this.dataSource)
  }
  comics(){
    this.showComics = true
    this.showEvents = false
    this.showSeries =false
    this.showCreators=false
    this.showStories = false
    this.showCharacter =false;
    // console.log('showcharacter',this.showCharacter)
    this.dataSource = new MatTableDataSource(this.Comics.marvel);
    // this.dataSource = this.Comics.marvel
    console.log('comics', this.Comics.marvel);
    console.log(this.dataSource)
  }
  events(){
    this.showEvents = true
    this.showComics = false
    this.showSeries =false
    this.showCreators=false
    this.showStories = false
    this.showCharacter =false;
    // console.log('showcharacter',this.showCharacter)
    // this.dataSource = this.Events.marvel
    this.dataSource = new MatTableDataSource(this.Events.marvel);
    console.log('events', this.Events.marvel);
    console.log(this.dataSource)
  }
  creators(){
    this.showCreators = true
    this.showEvents = false
    this.showComics = false
    this.showSeries =false
    this.showStories = false
    this.showCharacter =false;
    // console.log('showcharacter',this.showCharacter)
    // this.dataSource = this.Creators.marvel
    this.dataSource = new MatTableDataSource(this.Creators.marvel);
    console.log('creators', this.Creators.marvel);
    console.log(this.dataSource)
  }
  series(){
    this.showSeries = true
    this.showEvents = false
    this.showComics = false
    this.showCreators=false
    this.showStories = false
    this.showCharacter =false;
    // console.log('showcharacter',this.showCharacter)
    // this.dataSource = this.Series.marvel
    this.dataSource = new MatTableDataSource(this.Series.marvel);
    console.log('series', this.Series.marvel);
    console.log(this.dataSource)
  }
  stories(){
    this.showStories = true
    this.showSeries = false
    this.showEvents = false
    this.showComics = false
    this.showCreators=false
    this.showCharacter =false;
    // console.log('showcharacter',this.showCharacter)
    // this.dataSource = this.Stories.marvel
    this.dataSource = new MatTableDataSource(this.Stories.marvel);
    console.log('stories', this.Stories.marvel);
    console.log(this.dataSource)
  }
}
