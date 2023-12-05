import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: 'car-card/car-card.component.html',
  styleUrl: './car-card/car-card.component.scss'
})
export class AppComponent {
  title = 'PAB';
}
