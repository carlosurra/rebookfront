import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AddBookService {
  opened = false;
  constructor(private http: HttpClient) {}

  addBook({ 
      title, 
      author, 
      description }) {
    return this.http.post(`${environment.apiBaseUrl}/book`, {
      title,
      author,
      description
    });
  }
  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
}