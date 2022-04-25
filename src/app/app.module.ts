import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { BooksComponent } from './books/books.component';
import { BookItemComponent } from './book-item/book-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component'
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'info', component: InfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    BooksComponent,
    BookItemComponent,
    AddBookComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
