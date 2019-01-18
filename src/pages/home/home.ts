import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { FavPage } from '../fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info = InfoPage;
  favoritos = [];
  fav = FavPage;

  

  constructor(public navCtrl: NavController) {

  }

  casas = [
    {
      nombre: "Casa de lujo",
      precio: "$ 14,500,000",
      imagen: "../assets/1.jpg",
      ciudad: "Tlajomulco de Zuñiga",
      colonia:"Club de Golf",
      antiguedad:"7",
      recamaras: "8",
      banos: "5",
      estacionamiento: "6"
      
    },
    {
      nombre: "Meteoro Residencial Queretaro",
      precio: "$ 3,369,968",
      imagen: "../assets/2.jpg",
      ciudad: "El Salitre, Querétaro",
      colonia:"Meteoro altezano",
      antiguedad:"2 ",
      recamaras: "3",
      banos: "3",
      estacionamiento: "2"
      
    },
    {
      nombre: "Terranova",
      precio: "$ 4'000,000",
      imagen: "../assets/3.jpg",
      ciudad: "Zapopan",
      colonia:"Valle Imperial",
      antiguedad:"2",
      recamaras: "3",
      banos: "4+",
      estacionamiento: "4"
      
    },
    {
      nombre: "Casa en Nuevo México",
      precio: "$ 4,380,000",
      imagen: "../assets/4.jpg",
      ciudad: "Zapopan",
      colonia:"Nuevo México",
      antiguedad:"5",
      recamaras: "3",
      banos: "4+",
      estacionamiento: "3"
      
    },
    {
      nombre: "Amplia casa en Ciudad Granja",
      precio: "$ 4'200,000",
      imagen: "../assets/5.jpg",
      ciudad: "Zapopan",
      colonia:"Ciudad granja",
      antiguedad:"7",
      recamaras: "3",
      banos: "4",
      estacionamiento: "4"
      
    },
    {
      nombre: "Casa en Puerta de Hierro",
      precio: "$ 29'900,000 ",
      imagen: "../assets/6.jpg",
      ciudad: "Zapopan",
      colonia:"Puerta de Hierro",
      antiguedad:"",
      recamaras: "5",
      banos: "5 y medio",
      estacionamiento: "6"
      
    },
    {
      nombre: "Casa en el sur",
      precio: "$ 1'335,000",
      imagen: "../assets/7.jpg",
      ciudad: "Tlajomulco de Zuñiga",
      colonia:"Club de Golf Sta.Anita",
      antiguedad:"10",
      recamaras: "4",
      banos: "3",
      estacionamiento: "4"
      
    },
    {
      nombre: "Casa en la cima del sur",
      precio: "$ 1'335,000",
      imagen: "../assets/8.jpg",
      ciudad: "Tlajomulco de Zuñiga",
      colonia:"El Cielo Country Club",
      antiguedad:"2",
      recamaras: "4",
      banos: "3 completos y tres medios",
      estacionamiento: "4"
      
    },
    {
      nombre: "Casa en el Cielo",
      precio: "$ 9,500,000",
      imagen: "../assets/9.jpg",
      ciudad: "Tlajomulco de Zuñiga",
      colonia:"El Cielo Country Club",
      antiguedad:"4",
      recamaras: "4",
      banos: "4",
      estacionamiento: "4"
      
    },
    {
      nombre: "Casa cerca de Andares",
      precio: "$ 10,973,322",
      imagen: "../assets/10.jpg",
      ciudad: "Zapopan",
      colonia:"Puerta de Hierro",
      antiguedad:"4",
      recamaras: "5",
      banos: "5",
      estacionamiento: "4"
      
    }
  ];

  Clickinfo(c){
    this.navCtrl.push(this.info, {casas: c, favoritos: this.favoritos});


  }

  Clickfavo(){
    this.navCtrl.push(this.fav, {favoritos: this.favoritos});

  }



}



