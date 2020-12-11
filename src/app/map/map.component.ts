import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IHotelDetails } from '../app.component';
declare var google: any;
declare var $: any;


@Component({
  selector: 'map',
  templateUrl: './map.component.html'
})

export class MapComponent implements AfterViewInit {

  @ViewChild("map") mapRef: ElementRef;

  private centerMunich: Object = { lat: 48.137154, lng: 11.576124 };
  private myHome: Object = { lat: 48.12268059537522, lng: 11.562643168778207 };
  private marker: Object;
  public map: Object;

  public idd;

  public hotelsObjectArray: IHotelDetails[] = [
    { id: 0, city: "Munich", street: "Marienplatz", distanceToCenter: "0.1 km FROM CENTER", price: "$98", designDesc: "Design may vary", roomImage: "assets/img/room1.png" },
    { id: 1, city: "Munich", street: "Dreimuhlenstrasse", distanceToCenter: "1.6 km FROM CENTER", price: "$143", designDesc: "Design may change", roomImage: "assets/img/room2.png" },
    { id: 2, city: "Munich", street: "Olympiapark", distanceToCenter: "1.5 km FROM CENTER", price: "$48", designDesc: "Design may vary", roomImage: "assets/img/room3.png" }
  ];

  public locationsMunich: any = [
    ["Marienplatz", "48.137154", "11.576124", 0, "assets/img/design_assets_home-icon.svg"],
    ["My Home", "48.122680595375", "11.5626431687782", 1, "assets/img/design_assets_home-icon.svg"],
    ["Olympiapark", "48.1764235294989", "11.5513759002564", 2, "assets/img/design_assets_home-icon.svg"]
  ]


  private iconsEdit(id: number) {
    // this.locationsMunich[id][4]

  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 12,
        center: this.centerMunich
      });


      for (var i = 0; i < this.locationsMunich.length; i++) {

        this.marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.locationsMunich[i][1], this.locationsMunich[i][2]),
          options: {
            icon: {
              url: this.locationsMunich[i][4],
              scaledSize: new google.maps.Size(30, 30)
            }
          },
          map: this.map
        });

        google.maps.event.addListener(this.marker, 'click', (function (marker, i) {

          return function () {
            let arrayIndexes: number[] = [0, 1, 2];
            arrayIndexes = arrayIndexes.filter(el => el != i);

            arrayIndexes.forEach(nr => {
              $('#' + nr).hide();
            })
            $('#' + i).show();
          }

        })(this.marker, i));
      }

    }, 1000);
  }


}
