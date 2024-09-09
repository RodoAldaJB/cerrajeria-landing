import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hexagono',
  standalone: true,
  imports: [],
  templateUrl: './hexagono.component.html',
  styleUrl: './hexagono.component.scss'
})
export class HexagonoComponent {

  @Input() image? : string; 
  @Input() alt? : string;

}
