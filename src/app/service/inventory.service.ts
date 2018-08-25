import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class InventoryService {

  api_url: any = 'http://localhost:8091/api/';
  constructor(private httpClient: HttpClient) { }

  showCategories() {
    return this.httpClient.get(this.api_url + 'category/get');
  }

  addCategory(parameters: any) {
    return this.httpClient.post(this.api_url + 'category/store', parameters);
  }

  showBooks() {
    return this.httpClient.get(this.api_url + 'books/get');
  }

  addBook(parameters: any) {
    return this.httpClient.post(this.api_url + 'books/store', parameters);
  }

  booksPerCategory() {
    return this.httpClient.get(this.api_url + 'books/getBooksPerCategory');
  }

  booksPerAuthor() {
    return this.httpClient.get(this.api_url + 'books/getBooksPerAuthor');
  }
}
