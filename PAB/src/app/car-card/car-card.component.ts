import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent {
  @Input() imgSrc: string;
  @Input() brand: string;
  @Input() model: string;
}
