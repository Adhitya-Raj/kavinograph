import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ImgGridComponent } from './img-grid/img-grid.component';
import { PhotographsComponent } from './photographs/photographs.component';
import { SketchesComponent } from './sketches/sketches.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { RendersComponent } from './renders/renders.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImgGridComponent,
    PhotographsComponent,
    SketchesComponent,
    GraphicsComponent,
    RendersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
