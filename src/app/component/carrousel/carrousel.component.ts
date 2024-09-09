import { Component, Input } from '@angular/core';
import { HexagonoComponent } from '../hexagono/hexagono.component';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [
    HexagonoComponent
  ],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {

  @Input() skills : any[] = [{ image: '', text: '' }] ;
  @Input() repeatItems : any;

}
