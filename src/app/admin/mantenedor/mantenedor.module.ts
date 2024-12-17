import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenedorPageRoutingModule } from './mantenedor-routing.module';

import { MantenedorPage } from './mantenedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenedorPageRoutingModule
  ],
  declarations: [MantenedorPage]
})
export class MantenedorPageModule {}
