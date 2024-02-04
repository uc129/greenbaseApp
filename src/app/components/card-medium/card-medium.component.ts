import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-medium',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-medium.component.html',
  styleUrl: './card-medium.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardMediumComponent {

  @Input() public data: any;

}
