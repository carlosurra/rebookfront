import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/core/services/library.service';


@Component({
  selector: 'rb-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})

export class LibraryComponent implements OnInit {
  showBooks = false;
  constructor(
    private router: Router, 
    public libraryService: LibraryService
    ) {}

  ngOnInit() {
    this.libraryService
    .getLibrary()
    .subscribe(
      (library) => {if(library.length > 0)this.showBooks = true});
  } 
  }

