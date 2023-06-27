import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private service:ServiceService, private router: Router) { }
  characters?:Observable<any>;

  ngOnInit(){
    this.getAllCharacters();
  }

  getAllCharacters(){
    this.characters = this.service.getAllCharacters();
  }

  getCharacter(id:string){

    this.router.navigate(['/detail/',id]);

  }

}
