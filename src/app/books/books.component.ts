import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../service/inventory.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {}

declare var $: any;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  parameters: any = {};
  books: any = [];
  categories: any = [];
  booksForm: FormGroup;
  constructor(private inventoryService: InventoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.booksForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      isbn: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
    this.books = this.activatedRoute.snapshot.data['books'];
    this.categories = this.activatedRoute.snapshot.data['categories'];
  }

  saveBook() {
    this.parameters.title = this.booksForm.value.title;
    this.parameters.author = this.booksForm.value.author;
    this.parameters.isbn = this.booksForm.value.isbn;
    this.parameters.category = this.booksForm.value.category;

    this.inventoryService.addBook(this.parameters)
      .subscribe(
        () => {
          this.inventoryService.showBooks().subscribe(
            (res) => {
              this.booksForm.reset();
              this.books = res;
            }
          );
        }
      );
    console.log(this.parameters);
  }

}
