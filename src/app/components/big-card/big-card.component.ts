import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
@Input()
 Id:string = '0';
@Input()
 fotoCover : string ="";
 @Input()
 cardTitle: string ="";
@Input()
 cardDescricao ="";
}
