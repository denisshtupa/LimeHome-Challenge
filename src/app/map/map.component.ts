import { Constants } from './../../shared/constants';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { IHotelDetails } from 'src/shared/interface/interface';
declare var google: any;
declare var $: any;

@Component({
  selector: 'map',
  templateUrl: './map.component.html'
})

export class MapComponent implements AfterViewInit {
  @ViewChild("map") mapRef: ElementRef;

  private centerMunich: Object = { lat: 48.137144, lng: 11.576134 };
  public map: Object;
  private marker: any;
  public display: string = "none";
  public userForm: FormGroup;

  public hotelsObjectArray: IHotelDetails[] = Constants.hotels;
  public locationsMunich: any[] = Constants.locations;

  constructor(private _fb: FormBuilder) {
    this.initUserForm();
  }

  ngAfterViewInit() {

    let markers = [];
    var map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 12,
      center: this.centerMunich,
    });

    for (var i = 0; i < this.locationsMunich.length; i++) {
      this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          this.locationsMunich[i][1],
          this.locationsMunich[i][2]
        ),
        options: {
          icon: {
            url: this.locationsMunich[i][4],
            scaledSize: new google.maps.Size(30, 30),
          },
        },
        id: i,
        map: map,
        visible: true,
      });

      google.maps.event.addListener(
        this.marker,
        'click',
        (function (marker, i) {
          markers.push(marker);
          return function () {
            let arrayIndexes: number[] = [0, 1, 2];
            arrayIndexes = arrayIndexes.filter((el) => el != i);
            arrayIndexes.forEach((nr) => {
              $('#' + nr).hide();
            });

            markers.forEach(point => {
              if (point.id == marker.id) {
                point.icon.url = 'assets/img/design_assets_home-icon-active.svg';
              } else {
                point.icon.url = 'assets/img/design_assets_home-icon.svg';
              }
            })

            map.panTo(marker.getPosition());
            $('#' + i).show();
          };
        })(this.marker, i)
      );
    }
  }

  public openBookModal(): void {
    this.display = "block";
  }

  public confirmBooking(): void {
    this.displayToastMessageSuccess("Thank you for booking to our hotel")
    this.display = "none";
    this.initUserForm();
  }

  public closePopup(): void {
    this.display = "none";
    this.initUserForm();
  }

  private displayToastMessageSuccess(successMessage: string, title?: string): void {
    swal({
      title: title || 'Success !',
      text: successMessage,
      type: 'success',
      timer: 8000,
      showConfirmButton: false,
      toast: true,
      position: 'top-right'
    });
  }

  private initUserForm(): void {
    this.userForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

}
