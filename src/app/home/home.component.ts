import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../service/inventory.service';
declare const require: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  optionsBookCategory: any;
  optionsBookAuthor: any;

  pieChartValues: any = {};
  barChartXAxis: any = {};
  barChartYAxis: any = {};
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService.booksPerCategory()
      .subscribe(
        (res) => {
          this.pieChartValues = res;
          this.optionsBookCategory = {
            title : {
              text: 'Books Per Category',
            },
            tooltip : {
              trigger: 'item',
              formatter: '{a} {b} <br/> {c} ({d}%)'
            },
            series : [
              {
                name: 'Books Per Category',
                type: 'pie',
                radius : '75%',
                center: ['50%', '60%'],
                data: res
                /*data: [
                  {
                    name: 'asd',
                    value: '10'
                  }
                ]*/
              }
            ]
          };
        }
      );

    this.inventoryService.booksPerAuthor()
      .subscribe(
        (res) => {
          // the mapping will goe here!
           this.barChartXAxis = Object.keys(res);
           this.barChartYAxis = Object.values(res);

          this.optionsBookAuthor = {
            title : {
              text: 'Books Per Author',
            },
            xAxis: {
              type: 'category',
              data: this.barChartXAxis
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: this.barChartYAxis,
              type: 'bar'
            }]
          };
        }
      );



    /*this.optionsBookAuthor = {
      title: {
        text: 'Books Per Author'
      },
      xAxis: {
        data: dataAxis,
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      series: [
        { // For shadow
          name: 'yea',
          type: 'bar',
          barGap: '-100%',
          barCategoryGap: '40%',
          data: data,
          animation: false
        }
      ]
    };*/
  }

}
