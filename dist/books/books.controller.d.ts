import { BooksService } from './books.service';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    addBook(bookTitle: string, bookDesc: string, bookPrice: number): any;
    allBooks(): import("./books.model").Book[];
}
