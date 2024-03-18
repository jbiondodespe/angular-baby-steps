 import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',   
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() title:string = '';
  @Input() items:  Character[] = []; 

  @Output()
  public onDeleteItem:  EventEmitter<string> = new EventEmitter(); 

  onClickDelete(id: string): void{ 
    this.onDeleteItem.emit(id);
  }
}
