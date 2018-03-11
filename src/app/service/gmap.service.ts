import { Injectable, NgZone } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

declare var google: any;

@Injectable()
export class GMapsService extends GoogleMapsAPIWrapper {
    constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
        super(__loader, __zone);
    }

    getLatLan(address: string): Observable<any> {
        console.log('Getting Address - ', address);
        const geocoder = new google.maps.Geocoder();
        return Observable.create(observer => {
            geocoder.geocode( { 'address': address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    observer.next(results[0].geometry.location);
                    observer.complete();
                } else {
                    console.log('Error - ', results, ' & Status - ', status);
                    alert('Address Not Found');
                    observer.next({});
                    observer.complete();
                }
            });
        });
    }
}
