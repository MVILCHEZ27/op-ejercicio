import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  title='Character';
  idCharacter='';
  character:any={};
  characterDescription='';

  constructor(private service: ServiceService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => {
      this.idCharacter = params['id']
    })
   }

  ngOnInit(): void {
    this.getIdFromCharacter();
  }

  getIdFromCharacter(){
    this.service.getCharacter(this.idCharacter).subscribe({
      next:(res)=>{
        let dataFromCharacter={
          name:res[0].name,
          description:res[0].description,
          thumbnailPath:res[0].thumbnail.path,
          thumbnailExtension:res[0].thumbnail.extension,
          modified:res[0].modified,
          urls:res[0].urls[0].url,  
        };
        this.character = dataFromCharacter;

        if (this.character.description === '') {

          this.characterDescription = 'No description'
          
        }else{
          this.characterDescription = this.character.description
        }
      },
      error:(err)=>{
        console.log(err);
      }
            
      
      
    })

  }
}
