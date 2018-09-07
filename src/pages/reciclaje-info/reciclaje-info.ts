import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReciclajeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reciclaje-info',
  templateUrl: 'reciclaje-info.html',
})
export class ReciclajeInfoPage {
  tiposReciclaje=[
    {name:"botellas"},{name:"plastico"},{name:"organico"}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReciclajeInfoPage');
  }

}
