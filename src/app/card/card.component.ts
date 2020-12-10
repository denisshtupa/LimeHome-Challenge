import { Component, Input } from '@angular/core';
import { IHotelDetails } from '../app.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html'
})



export class CardComponent {
    @Input() hotelsObject: IHotelDetails = null;
}
