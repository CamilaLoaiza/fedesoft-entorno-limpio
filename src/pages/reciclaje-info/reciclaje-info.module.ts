import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReciclajeInfoPage } from './reciclaje-info';

@NgModule({
  declarations: [
    ReciclajeInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ReciclajeInfoPage),
  ],
})
export class ReciclajeInfoPageModule {}
