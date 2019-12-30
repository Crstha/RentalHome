import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostumSearchPageRoutingModule } from './costum-search-routing.module';

import { CostumSearchPage } from './costum-search.page';

import { StarRatingModule } from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    CostumSearchPageRoutingModule
  ],
  declarations: [CostumSearchPage]
})
export class CostumSearchPageModule {}
