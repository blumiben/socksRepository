import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sales, soks_sales } from '../models/socks_sales'

@Injectable({
  providedIn: 'root'
})
export class SocksDataService {
 
  


  private REST_API_SERVER = "https://raw.githubusercontent.com/RachelVinograd/JSON/main/data"
  constructor(private httpClient: HttpClient) {
    

  


   }
   public getData():Observable<soks_sales>{ 
     return this.httpClient.get<soks_sales>(this.REST_API_SERVER);
     }

   
  
}


