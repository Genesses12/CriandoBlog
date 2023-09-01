import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-noticia-nova',
  templateUrl: './noticia-nova.component.html',
  styleUrls: ['./noticia-nova.component.css',
              './noticia-nova-responsiva.css']
})
export class NoticiaNovaComponent {
  @Input()
  imageFooter:string = "";
  @Input()
  imgTitle:string ="";
  @Input()
  Id:string = "0"

}
