import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }


  public characters: Character[] = [
    {
      id: uuid(),
      name: "goku",
      power: 10000
    }
    ,
    {
      id: uuid(),
      name: "trunks",
      power: 9000
    },
    {
      id: uuid(),
      name: "krillin",
      power: 5000
    }
  ]



  addCharacter(newCharacter: Character): void {
    const character = {
      ...newCharacter,
      id: uuid()
    }
    this.characters.push(character);
  }

  deleteItemAt(index: number): void {
    this.characters.splice(index, 1)
  }

  deleteById(id: string): void {
    const index = this.characters.findIndex( item => item.id == id)
    this.characters.splice(index, 1)
  }
}
