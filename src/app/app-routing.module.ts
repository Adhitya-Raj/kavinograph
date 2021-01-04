import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { GraphicsComponent } from './graphics/graphics.component';
import { HomeComponent } from './home/home.component';
import { PhotographsComponent } from './photographs/photographs.component';
import { SketchesComponent } from './sketches/sketches.component';
import { RendersComponent } from './renders/renders.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mywork/3dwork', component: RendersComponent},
  {path: 'mywork/graphicdesign', component: GraphicsComponent},
  {path: 'mywork/sketches', component: SketchesComponent},
  {path: 'mywork/photographs', component: PhotographsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'ignore',
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
