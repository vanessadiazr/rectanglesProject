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
  columns: number;
  rows: number;




  onKey(value: any){

    this.getWindowDimensions();
    this.numberRectangles = value;
    console.log(value);
    this.a = (this.h * this.w)/value;
    this.b = this.a/1.7;

    this.columns = this.w/(this.a + 4);
    this.rows = this.h/(this.b + 4);

      console.log(this.a);
      console.log(this.b);
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


  getWindowDimensions(){
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    console.log(this.h);
    console.log(this.w);
    
  }
}
