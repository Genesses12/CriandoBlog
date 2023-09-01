import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake} from 'src/app/data/data.Fake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  fotoCover: string ="";
  contentTitle:string="";
  contentDescricao:string  = ""
  private id: string | null= "0"

  constructor(
    private route:ActivatedRoute
  ) {}

ngOnInit(): void {

this.route.paramMap.subscribe(value =>
     this.id = value.get("id") 
  )
  this.setValuesToComponent(this.id)
}
 
setValuesToComponent(id:string | null){
        const result = dataFake.filter( article => article.id == id)[0]
           
        this.contentTitle = result.title
        this.contentDescricao = result.descripttion
        this.fotoCover = result.fotoCover
          
  
        }
 }
