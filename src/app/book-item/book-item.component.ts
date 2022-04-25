import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../Book';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book = { id: 0, authorName:'', authorSurname:'', bookTitle: ''}; 
  @Output() onDeletingEvent: EventEmitter<Book> = new EventEmitter();
  faTrash = faTrash;
  constructor() { }

  ngOnInit(): void {
  }
  removeBookItem(book: Book){
    this.onDeletingEvent.emit(book);
  }


}
