import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent
{
  movibles: any[] = [
    { id: 1, texto: 'Primero', datos: 2 },
    { id: 2, texto: 'Segundo', datos: 36 }
  ];

  movidos: any[] = [];

  constructor() { }

  Mover(event: any){
    this.movibles = this.movibles.filter(m => m.id != event.dragData.id);
    this.movidos.push(event.dragData);
  }

  Desmover(event: any){
    this.movidos = this.movidos.filter(m => m.id != event.dragData.id);
    this.movibles.push(event.dragData);
  }
}
