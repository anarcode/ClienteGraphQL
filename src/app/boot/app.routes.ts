import { Routes } from "@angular/router";
import { RUTA_VER_PELICULAS, RUTA_VER_ACTORES, RUTA_DRAG_DROP } from "../config/rutas";
import { VerPeliculasComponent } from "../components/ver-peliculas/ver-peliculas.component";
import { VerActoresComponent } from "../components/ver-actores/ver-actores.component";
import { DragDropComponent } from "../components/drag-drop/drag-drop.component";

export const AppRoutes: Routes = [
  { path: RUTA_VER_PELICULAS, component: VerPeliculasComponent },
  { path: RUTA_VER_ACTORES, component: VerActoresComponent },
  { path: RUTA_DRAG_DROP, component: DragDropComponent }
  //,
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];
