import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostumSearchPage } from './costum-search.page';

const routes: Routes = [
  {
    path: '',
    component: CostumSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostumSearchPageRoutingModule {}
