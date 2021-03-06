"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const books_model_1 = require("./books.model");
let BooksService = class BooksService {
    constructor() {
        this.books = [];
    }
    insertBook(title, desc, price) {
        const bookId = new Date().toString();
        const newBook = new books_model_1.Book(bookId, title, desc, price);
        this.books.push(newBook);
        return bookId;
    }
    getBooks() {
        return this.books;
    }
};
BooksService = __decorate([
    common_1.Injectable()
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map