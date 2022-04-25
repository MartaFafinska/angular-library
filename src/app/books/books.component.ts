import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = []; 
  
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((books)=> this.books = books);
  }
  deleteBook(book: Book){
    this.booksService.deleteBook(book).subscribe(()=> this.books =this.books.filter(b => b.id!==book.id));
  }
  addBook(book: Book){
    this.booksService.addBook(book).subscribe((book)=> 
    (this.books.push(book))
    );
  }

}
