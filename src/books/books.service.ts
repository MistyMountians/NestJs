import { Injectable } from '@nestjs/common';
import { Book } from './books.model';

@Injectable()
export class BooksService {
    books: Book[] = [];

    insertBook(title: string, desc: string, price: number) {
        const bookId = new Date().toString();
        const newBook = new Book(bookId, title, desc, price)
        this.books.push(newBook);
        return bookId;
    }
    getBooks(){
        return this.books;
    }
}