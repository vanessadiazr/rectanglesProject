import { Component, OnInit, DoCheck, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  h: number;
  w: number;
  numberRectangles: number;

  //DIMENSOES RECTANGULOS: a = largura b = altura
  a:number;
  b: number;

  columnSize: number;

@ViewChild('myContainer') 
myContainer: ElementRef;


  onKey(value: any){

    this.getWindowDimensions();
    this.numberRectangles = value;
    this.columnSize = this.getColumnSize(this.h, value, this.w);
    this.a = (this.w-2)/this.columnSize -4;
    this.b = this.a/1.7;
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

  getColumnSize(H:number, n:number, W:number){

    let w = W -2;
    let h = H -29;
    let a = (1.7*h)/n;
    let b = -1.7*4+4;
    let c = -w;
    let frigles = Math.pow(b, 2) - 4*a*c;
    let result1 = (-b + Math.sqrt(frigles))/(2*a);
    let result2 = (-b - Math.sqrt(frigles))/(2*a);

    if(result1 > 0){
      return Math.floor(result1);
    } 
      return  Math.floor(result2);
  }

  getWindowDimensions(){
    this.w = this.myContainer.nativeElement.clientWidth;
    this.h = this.myContainer.nativeElement.clientHeight;
    console.log('width: ' + this.w);
    console.log('height: ' + this.h);
    
  }
}
