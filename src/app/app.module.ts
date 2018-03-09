import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { GridPageComponent } from './pages/grid-page/grid-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    GridPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
