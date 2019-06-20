import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Library } from 'src/app/core/core.models';

@Injectable({
    providedIn: 'root'  
  })  
  export class LibraryService {  
    library: Library[] = [];

    constructor(private http: HttpClient, private router: Router){}
    getLibrary() {
        return this.http
        .get(`${environment.apiBaseUrl}/library`).pipe(    
          tap((library: Library[]) => {    
            this.library = library;    
            console.log(this.library);    
          })    
        );    
      }
    }