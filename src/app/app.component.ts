import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HexagonoComponent } from './component/hexagono/hexagono.component';
import { CarrouselComponent } from './component/carrousel/carrousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CarrouselComponent,
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'cerrjeria-landing-page';

  skills = [
    {
      image: "assets/images/cerrajeria-24-hrs.jpg",
      text: "Cerrajeria a domicilio 24 horas"
    },
    {
      image: "assets/images/item-2.jpg",
      text: "apertura de vehículos y puertas"
    },
    {
      image: "assets/images/item-3.jpg",
      text: "Cerraduras blindadas y multilock viso"
    },
    {
      image: "assets/images/item-4.jpg",
      text: "Cajas fuertes"
    },
    {
      image: "assets/images/item-5.jpg",
      text: "Puertas de vidrio"
    },
    {
      image: "assets/images/item-6.jpg",
      text: "Brazos hidráulicos"
    },
    {
      image: "assets/images/item-7.jpg",
      text: "Sistemas de accesos biometricos huellas control remoto"
    },
    {
      image: "assets/images/item-8.jpg",
      text: "Copias de llaves con chip todos los modelos"
    },
    {
      image: "assets/images/item-9.jpg",
      text: "Reparación de cerraduras y mantenimiento de multilock viso y otros sistemas bancarios"
    },
  ]

  repeatItems : any[] = [];

  callMe: boolean = false;

  ngOnInit(): void {
    for (let index = 0; index < 4; index++) {
      let temp = {
        image: this.skills[index].image,
        text: this.skills[index].text
      }
      this.repeatItems.push(temp)      
    }
  }

  clickCallMe(){
    this.callMe = true;
  }

  closedCallMe(){
    this.callMe = false;
  }
}
