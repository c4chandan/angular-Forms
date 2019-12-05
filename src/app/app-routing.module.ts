import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsDemoComponent } from './Forms/forms-demo/forms-demo.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';


const routes: Routes = [
{ path:"Forms",component:FormsDemoComponent},
{path:"pageNotFound",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule=[

  FormsDemoComponent,PageNotFoundComponent
]
