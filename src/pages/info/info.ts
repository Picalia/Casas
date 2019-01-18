import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isRightSide } from 'ionic-angular/umd/util/util';
import { FavPage } from '../fav/fav';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     
    this.casas = this.navParams.get("casas");
    this.favoritos = this.navParams.get("favoritos");


  }

  
  Clickfav(){
    this.favoritos.push(
      this.casas
    );
    this.navCtrl.pop();


  }

  casas = '';
  favoritos = [];

  



  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
