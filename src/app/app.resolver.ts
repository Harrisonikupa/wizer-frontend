import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {InventoryService} from './service/inventory.service';

@Injectable()
export class CategoryResolver implements Resolve<any> {
  constructor(private inventoryService: InventoryService) {}
  resolve() {
    return this.inventoryService.showCategories();
  }
}

@Injectable()
export class BooksResolver implements Resolve<any> {
  constructor(private inventoryService: InventoryService) {}
  resolve() {
    return this.inventoryService.showBooks();
  }
}
