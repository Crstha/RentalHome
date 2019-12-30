import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyprofilePageRoutingModule } from './propertyprofile-routing.module';

import { PropertyprofilePage } from './propertyprofile.page';

import { StarRatingModule } from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    PropertyprofilePageRoutingModule
  ],
  declarations: [PropertyprofilePage]
})
export class PropertyprofilePageModule {}
