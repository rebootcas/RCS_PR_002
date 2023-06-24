import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageContentComponent } from './components/home/homepage-content.component';
import { OurServiceComponent } from './components/our-service/our-service.component';

const routes: Routes = [  {
  path:'', component:HomepageContentComponent
},
{
  path:'ourservice', component:OurServiceComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
