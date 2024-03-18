import { Character } from './../../interfaces/character.interface';
import { ChangeDetectionStrategy, Component, type OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-add-character',  
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent implements OnInit {

  @Input() title: string = "Agregar Personaje";
  
  @Output()
  onNewCharacter:  EventEmitter<Character> = new EventEmitter();
  
  character: Character = {
    id:'',
    name: '',
    power: 0
  }


  ngOnInit(): void { }


  emitCaracter(): void{
    console.log(this.character)
    this.onNewCharacter.emit({...this.character});

    this.character.name = ''
    this.character.power = 0
  }

}
