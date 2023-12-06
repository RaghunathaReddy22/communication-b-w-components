import { outputAst } from '@angular/compiler';
import { Component, Input,Output,EventEmitter} from '@angular/core';
import { __values } from 'tslib';


@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent {
@Input() Beverages="tea";
@Output() newBeverageEvent=new EventEmitter();
 //constructor(){}
 

addviewBeverage(value:string){
  this.newBeverageEvent.emit(value);
}

}
