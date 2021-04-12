import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http : HttpClient) { }

  getConfig():Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/characters?apikey=65006fd3de49b19b074ea580b0a2bd7c");
  }
  getConfigById(id:any):Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/characters/"+id+"?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getCharachetrsId():Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/characters/1011334?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getComics():Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/comics?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getComicsById(id:any):Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/comics/"+id+"?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getEvents():Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/events?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getEventsById(id:any):Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/events/"+id+"?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getSeries():Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/series?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getSeriesById(id:any):Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/series/"+id+"?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getStories():Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/stories?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getStoriesById(id:any):Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/stories/"+id+"?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getCreators():Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/creators?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
  getCreatorsById(id:any):Observable<any>{
    return this.http.get("https://gateway.marvel.com:443/v1/public/creators/"+id+"?apikey=65006fd3de49b19b074ea580b0a2bd7c")
  }
}
