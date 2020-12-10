import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  public title: string = 'LimeHome-Challenge';

  public hotels: IHotelDetails[] = [
    { city: "Berlin", street: "Tauentzienstrasse", distanceToCenter: "3.4km FROM CENTER", price: "$98", designDesc: "Design may vary", roomImage: "assets/img/room1.png" },
    { city: "Munich", street: "Dreimuhlenstrasse", distanceToCenter: "1.6km FROM CENTER", price: "$143", designDesc: "Design may change", roomImage: "assets/img/room2.png" },
    { city: "Munich", street: "Freizeitstrasse", distanceToCenter: "3.4km FROM CENTER", price: "$48", designDesc: "Design may vary", roomImage: "assets/img/room3.png" },
    { city: "Berlin", street: "Marienplatz", distanceToCenter: "0.2km FROM CENTER", price: "$208", designDesc: "Design may vary", roomImage: "assets/img/room1.png" }
]
}

export interface  IHotelDetails {
  city: string
  street: string
  distanceToCenter: string
  price: string
  designDesc: string,
  roomImage: string
}
