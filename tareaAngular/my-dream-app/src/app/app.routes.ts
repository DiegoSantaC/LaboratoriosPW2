import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelloWordComponent } from './hello-word/hello-word.component';

export const routes: Routes = [
    {path: 'about', component:AboutComponent},
    {path: 'hello', component:HelloWordComponent},
];
