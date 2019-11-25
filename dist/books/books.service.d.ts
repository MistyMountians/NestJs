import { Book } from './books.model';
export declare class BooksService {
    books: Book[];
    insertBook(title: string, desc: string, price: number): string;
    getBooks(): Book[];
}
