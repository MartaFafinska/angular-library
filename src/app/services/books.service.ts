import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../Book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = "http://localhost:44845/api/books";
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiUrl);
  }
  deleteBook(book: Book): Observable<Book> {
    const deleteUrl = `${this.apiUrl}/${book.id}`;
    return this.httpClient.delete<Book>(deleteUrl);
  }
  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.apiUrl, book, httpOptions);
  }
}
