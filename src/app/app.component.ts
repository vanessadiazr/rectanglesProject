import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  h: number;
  w: number;
  numberRectangles: number;

  //a = largura 
  a:number;
  b: number;
  columnSize: number;
  rows: number;




  onKey(value: any){

    this.getWindowDimensions();
    this.numberRectangles = value;
    console.log(value);

    this.columnSize = this.getColumnSize(this.h, value, this.w);
    this.a = this.w/this.columnSize -4;
    this.b = this.a/1.7;
    

      console.log(this.columnSize);
  }

  generateArray(){
    let arrayOfRectangles = new Array();
    for(let i = 0; i< this.numberRectangles; i++){
      arrayOfRectangles[i] = 0;
    }
    return arrayOfRectangles;
    
  }

  ngOnInit(){
    
  }

  getColumnSize(h:number, n:number, w:number){

    let a = (1.7*h)/n;
    let b = -1.7*4+4;
    let c = -w;
    let frigles = Math.pow(b, 2) - 4*a*c;
  
    let result1 = (-b + Math.sqrt(frigles))/(2*a);
    let result2 = (-b - Math.sqrt(frigles))/(2*a);

    if(result1 > 0){
      return result1;
    } 
      return result2;


  }


  getWindowDimensions(){
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    console.log(this.h);
    console.log(this.w);
    
  }
}
