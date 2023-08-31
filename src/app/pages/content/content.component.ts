import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
  Foto_img: string ="https://i.ytimg.com/vi/CtDknAaW2dM/sddefault.jpg";
  @Input()
  contentTitle:string="Comtemplem o Mago";
  @Input()
  contentDescricao:string  = "O Mago mais podero que já existiu no mundo"

}
