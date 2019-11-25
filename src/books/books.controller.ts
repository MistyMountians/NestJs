import { Controller, Post, Body, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {

    }
    @Post()
    addBook(@Body('title') bookTitle: string,
            @Body('description') bookDesc: string,
            @Body('price') bookPrice: number
    ): any {
        const generatedId = this.booksService.insertBook(bookTitle, bookDesc , bookPrice);
        return this.booksService.getBooks();
    }
    @Get('allbooks')
    allBooks(){
        return this.booksService.getBooks();
    }
}