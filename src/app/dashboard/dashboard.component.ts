import { Component, OnInit,ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiServicesService } from '../api-services.service';
import { dataclass, dataField } from '../Modules/DataModule';
// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material'
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public Characters : dataclass = new dataclass()
  public Comics : dataclass = new dataclass()
  public Creators : dataclass = new dataclass()
  public Events : dataclass = new dataclass()
  public Series : dataclass = new dataclass()
  public Stories : dataclass = new dataclass()

  public CharacterDialogById : dataclass= new dataclass()


  dataSource : any = [];


  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
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
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  

  ngOnInit(): void {
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
    }) ;
    setTimeout( ()=>{
      this.charater()
    },3000)
    
  }
  // sorteddata  = this.Characters.marvel
  // sorting(sort:Sort){
  //   const data = this.Characters.marvel
  //   this.sorteddata = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc'
  //     console.log(data)
  //     switch (sort.active){
  //       case 'id': 
  //         return compare(a.id, b.id, isAsc);
  //         break;
  //       default:
  //         return
  //     }
  //   })
  // }
  charater(){
    this.showCharacter =true;
    this.showComics =false
    this.showEvents = false
    this.showSeries =false
    this.showCreators=false
    this.showStories = false
    this.dataSource = new MatTableDataSource(this.Characters.marvel);
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator;
    console.log('marvel', this.Characters.marvel);
  }
  comics(){
    this.showComics = true
    this.showEvents = false
    this.showSeries =false
    this.showCreators=false
    this.showStories = false
    this.showCharacter =false;
    this.dataSource = new MatTableDataSource(this.Comics.marvel);
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator;
    console.log('comics', this.Comics.marvel);
  }
  events(){
    this.showEvents = true
    this.showComics = false
    this.showSeries =false
    this.showCreators=false
    this.showStories = false
    this.showCharacter =false;
    this.dataSource = new MatTableDataSource(this.Events.marvel);
    this.dataSource.sort = this.sort
    console.log('events', this.Events.marvel);
    this.dataSource.paginator = this.paginator;
  }
  creators(){
    this.showCreators = true
    this.showEvents = false
    this.showComics = false
    this.showSeries =false
    this.showStories = false
    this.showCharacter =false;
    this.dataSource = new MatTableDataSource(this.Creators.marvel);
    this.dataSource.sort = this.sort
    console.log('creators', this.Creators.marvel);
    this.dataSource.paginator = this.paginator;
  }
  series(){
    this.showSeries = true
    this.showEvents = false
    this.showComics = false
    this.showCreators=false
    this.showStories = false
    this.showCharacter =false;
    this.dataSource = new MatTableDataSource(this.Series.marvel);
    this.dataSource.sort = this.sort
    console.log('series', this.Series.marvel);
    this.dataSource.paginator = this.paginator;
  }
  stories(){
    this.showStories = true
    this.showSeries = false
    this.showEvents = false
    this.showComics = false
    this.showCreators=false
    this.showCharacter =false;
    this.dataSource = new MatTableDataSource(this.Stories.marvel);
    this.dataSource.sort = this.sort
    console.log('stories', this.Stories.marvel);
    this.dataSource.paginator = this.paginator;
  }
}

// function compare(a: Number | string, b: Number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
