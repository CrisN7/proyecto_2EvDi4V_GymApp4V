import { Routes } from '@angular/router';
import { ActivitiesMainComponent } from './activities-main/activities-main.component';
import { MonitorsMainComponent } from './monitors-main/monitors-main.component';

export const routes: Routes = [
    { path: 'Actividades', component: ActivitiesMainComponent},
    { path: 'Monitores', component: MonitorsMainComponent}
];
