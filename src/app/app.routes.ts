import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { HistorialComponent } from './components/historial/historial.component';
import { NuevaPartidaComponent } from './components/nueva-partida/nueva-partida.component';
import { PartidaCreadaComponent } from './components/partida-creada/partida-creada.component';
import { FinPartidaComponent } from './components/fin-partida/fin-partida.component';
import { MostrarMisionComponent } from './components/mostrar-mision/mostrar-mision.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'mostrar-mision',
        component: MostrarMisionComponent
    },
    {
        path: 'historial',
        component: HistorialComponent
    },
    {
        path: 'nueva-partida',
        component: NuevaPartidaComponent
    },
    {
        path: 'partida-creada',
        component: PartidaCreadaComponent
    },
    {
        path: 'fin-de-partida',
        component: FinPartidaComponent
    },
    {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full'
    }
];
