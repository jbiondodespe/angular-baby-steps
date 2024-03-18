import { DbzService } from './../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
 
@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {

 
    constructor( private service: DbzService ) { 
    }

    ngOnInit() { }

    get characters(){
        return this.service.characters;
    }

    addCharacter(newCharacter: Character): void{
       this.service.addCharacter(newCharacter)
    }

    deleteById(id: string): void{
        this.service.deleteById(id)
    }
}