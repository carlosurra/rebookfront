import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddBookService } from 'src/app/core/services/addbook.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
    selector: 'rb-add-book',  
    templateUrl: './add-book.component.html',  
    styleUrls: ['./add-book.component.scss']  
  })
  export class AddBookComponent {
    addBookForm = this.fb.group({  
      title: ['', [Validators.required, Validators.minLength(1)]],  
      author: ['', [Validators.required, Validators.minLength(3)]],  
      description: [''],  
    });  
  
    constructor(  
      private fb: FormBuilder, 
      private router: Router, 
      public addBookService: AddBookService ,
      private modalService: ModalService,  
    ) {}  
  
    addBook() {  
      const {  
        title,  
        author,  
        description  
      } = this.addBookForm.value; 

    if (this.addBookForm.valid) {  
         this.addBookService  
          .addBook({ 
              title, 
              author, 
              description })  
          .subscribe(() => {  
            this.addBookForm.reset();  
            this.modalService.open(  
              'Another book added to your library!', 'Keep the community alive!');  
            this.router.navigate(['/wall']);  
          });  
      }  
    }  
  }