import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyprofilePage } from './propertyprofile.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyprofilePageRoutingModule {}
