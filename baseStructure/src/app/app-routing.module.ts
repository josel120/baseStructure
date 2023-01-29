import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainComponent } from './Modules/dashboard/components/main/main.component';

// sets up routes constant where you define your routes
const routes: Routes = [
    { path: '', component:  MainComponent},
    // { path: 'second-component', component: SecondComponent },
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }