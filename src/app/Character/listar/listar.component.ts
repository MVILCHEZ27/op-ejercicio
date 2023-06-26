import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterResult } from 'src/app/Model/CharacterResult';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  characterResults!: CharacterResult[];
  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(){
    this.service.getCharacters()
    .subscribe(data=>{
      this.characterResults=data;
      console.log(this.characterResults);
    })
  }

}
