import { NgModule } from '@angular/core';
import { MenuGeneralComponent } from './menu-general.component';
import { VerPeliculasComponent } from '../../components/ver-peliculas/ver-peliculas.component';
import { VerActoresComponent } from '../ver-actores/ver-actores.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from '../../services/peliculas.service';
import { ActoresService } from '../../services/actores.service';
import { DndModule } from 'ng2-dnd';
import { DragDropComponent } from '../drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    MenuGeneralComponent,
    VerPeliculasComponent,
    VerActoresComponent,
    DragDropComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    DndModule.forRoot()
  ],
  providers: [
    PeliculasService,
    ActoresService
  ],
  exports:[
    MenuGeneralComponent,
    DndModule
  ],
  bootstrap: [MenuGeneralComponent]
})
export class MenuGeneralModule { }
