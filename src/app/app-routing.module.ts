import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '',   redirectTo: '/page', pathMatch: 'full' },
  {path:"home", component:HomeComponent},
  {path:"page", component:PageComponent},
  {path:"profile", component:ProfileComponent},
  {path:"contactus", component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  ngOnInit(): void {
    
  }
 }
