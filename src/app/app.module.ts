import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LinkComponent } from './link/link.component';


const routes: Routes = [
  {path:'profile', component: LinkComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
