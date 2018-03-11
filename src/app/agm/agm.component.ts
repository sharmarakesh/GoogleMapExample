import { Component, OnInit, NgZone  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { GMapsService } from '../service/gmap.service';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.css'],
  providers: [GMapsService]
})
export class AgmComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  lat1 = 34.5555555;
  lng1 = 5.6666666;
  public zoom: number;
  public myAddress: string;
  constructor(private _mapsService: GMapsService, private _zone: NgZone) { }

  ngOnInit() {
    this.zoom = 18;
  }

clickSearchAddress() {
  this._mapsService.getLatLan(this.myAddress)
      .subscribe(
      result => {
          // needs to run inside zone to update the map
          this._zone.run(() => {
            this.lat1 = result.lat();
            this.lng1 = result.lng();
              this.lat = result.lat();
              this.lng = result.lng();
          });
      },
      error => console.log(error),
      () => console.log('Geocoding completed!')
      );
}
}
