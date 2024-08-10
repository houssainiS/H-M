import { Component } from '@angular/core';
import { Individual } from '../individual.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  individuals: Individual[] = [
    new Individual('MOHAMED AMIN', 'CEO & Founder', 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.', '..\\assets\\images\\IMG_20220329_200900_472.jpeg'),
    new Individual('Fatouma', 'Architect', 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.', '..\\assets\\images\\IMG-20231008-WA0000_1.jpg'),
    new Individual('Chilla', 'Architect', 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.', '..\\assets\\images\\IMG-20231003-WA0014.jpg'),
    new Individual('mana3rfouch', 'Architect', 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.', '..\\assets\\images\\IMG-20231008-WA0004.jpg')
  ];
}
