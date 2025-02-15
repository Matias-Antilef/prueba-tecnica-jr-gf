import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule, // Asegúrate de incluir RouterModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
