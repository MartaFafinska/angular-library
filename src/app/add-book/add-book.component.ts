import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../Book';
import { ToggleService } from '../services/toggle.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();
  bookTitle: string = '';
  authorName: string = '';
  authorSurname: string = '';
  showAddBook: boolean = false;
  subscription: Subscription;
  constructor(private toggleService: ToggleService) { 
    this.subscription = this.toggleService.onToggle().subscribe((value)=> this.showAddBook= value);
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.bookTitle || !this.authorName ||!this.authorSurname){
      alert("Please fill in book title, author name and author surname.");
      return;
    }
    const newBook: Book = {
      id: 0,
      bookTitle: this.bookTitle,
      authorName: this.authorName,
      authorSurname: this.authorSurname
    }

    this.onAddBook.emit(newBook);
    this.bookTitle='';
    this.authorName= '';
    this.authorSurname='';
  }

}
