import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=e5ef9385e60ea6eef94f9e85167722f2&query=' + location
    );
  }
}
