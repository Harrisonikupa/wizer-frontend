import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import {RouterModule, Routes} from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import {InventoryService} from './service/inventory.service';
import {HttpClientModule} from '@angular/common/http';
import {BooksResolver, CategoryResolver} from './app.resolver';
import {NgxEchartsModule} from 'ngx-echarts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BooksComponent,
    resolve : {
      books: BooksResolver,
      categories: CategoryResolver
    }
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    resolve: {
      categories: CategoryResolver
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    InventoryService,
    BooksResolver,
    CategoryResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
