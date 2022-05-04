
import { Component, OnInit } from '@angular/core';
import { Sales, soks_sales } from '../models/socks_sales';
import { SocksDataService } from '../services/socks-data.service';

@Component({
  selector: 'app-socks',
  templateUrl: './socks.component.html'
})


export class SocksComponent implements OnInit {


data:soks_sales;
sales_:Sales[]=[];
isIncrease:boolean=true;
isEdit:boolean[]=[];
currentSale:Sales=new Sales();
first_day_increase:string
 last_day_incrase: string
  sum_days_increase:number 
 
 
  first_day_Falling_prices:string
 last_day_Falling_prices :string
  sum_days_Falling_prices:number 
 
 constructor(public basicService:SocksDataService 
 ) { 
debugger;
this.data=new soks_sales()


  this.basicService.getData().subscribe(returnedData => {
  

    this.data=returnedData;

     for(var s in this.data.sales)
     {

    this.currentSale.date=s;
    this.currentSale.sales=+this.data.sales[s].sales
    this.currentSale=this.data.sales[s]

    this.currentSale.avarage=(this.data.sales[s].sales) / (this.data.sales[s].items);
       this.sales_.push(this.currentSale)
       
    
     }
    
     

    });
}
sortBySales(){

  this.sales_.sort((a, b) =>a.sales  >b.sales? 1 : a.sales <b.sales?  - 1: 0)
  }

  checkincrease(){


this.sum_days_increase=0

   
  for (let i = 1; i < this.sales_.length; i++) {
  
      let days_increase=0
     
  
  for(let j=i;j<this.sales_.length;j++){
    days_increase++


  if(days_increase>this.sum_days_increase)
  {
  this.sum_days_increase=days_increase
 
  
  this.first_day_increase=this.sales_[i].date
  this.last_day_incrase=this.sales_[j].date
  }i=j
    }
  }
  
}
Falling_prices(){
  let days_Falling_prices=0
  for (let i = 1; i < this.sales_.length; i++) {
  
  let j=i
  while (this.sales_[j].sales>this.sales_[j+1].sales) {
   days_Falling_prices++
    j=j+1
  }
i=j
if(days_Falling_prices>this.sum_days_Falling_prices){
  this.sum_days_Falling_prices=days_Falling_prices
  this.first_day_Falling_prices=this.sales_[i].date
  this.last_day_Falling_prices=this.sales_[j].date
}

}

}

edit(i){
  debugger;
  this.isEdit[i]=!this.isEdit[i]
  

}
 ngOnInit() {
  this.checkincrease()
  this.Falling_prices()
}

}


