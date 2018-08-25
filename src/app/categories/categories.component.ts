import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../service/inventory.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any = {};
  parameters: any = {};
  categoryForm: FormGroup;
  constructor(private inventoryService: InventoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categories = this.activatedRoute.snapshot.data['categories'];
    this.categoryForm = new FormGroup({
      'category': new FormControl(null, Validators.required)
    });
  }

  saveCategory() {
    this.parameters.name = this.categoryForm.value.category;

    this.inventoryService.addCategory(this.parameters)
      .subscribe(
        () => {
          this.inventoryService.showCategories().subscribe(
            (response) => {
              this.categoryForm.reset();
              this.categories = response;
            }
          );
        }
      );
  }

}
