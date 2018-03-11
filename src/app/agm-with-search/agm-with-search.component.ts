import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-agm-with-search',
  templateUrl: './agm-with-search.component.html',
  styleUrls: ['./agm-with-search.component.css']
})
export class AgmWithSearchComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
  // set google maps defaults
  this.zoom = 4;
  this.latitude = 39.8282;
  this.longitude = -98.5795;

  // create search FormControl
  this.searchControl = new FormControl();

  // set current position
  this.setCurrentPosition();

  // load Places Autocomplete
  this.mapsAPILoader.load().then(() => {
    const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      types: ['address']
    });
    autocomplete.addListener('place_changed', () => {
      alert('hello');
      this.ngZone.run(() => {
        // get the place result
        const place: google.maps.places.PlaceResult = autocomplete.getPlace();

        // verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        // set latitude, longitude and zoom
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
      });
    });
  });
}

private setCurrentPosition() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 12;
    });
  }
}

}
