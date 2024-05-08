import { Component, OnInit } from '@angular/core';
import { GoogleMap, MapMarker, MapInfoWindow } from '@angular/google-maps';
import { ViewChild } from '@angular/core';

@Component({
   selector: 'app-google-map',
   templateUrl: './google-map.component.html',
   styleUrl: './google-map.component.scss',
})
export class GoogleMapComponent implements OnInit {
   @ViewChild(MapInfoWindow) infoWindow?: MapInfoWindow;
   display: any;
   center: google.maps.LatLngLiteral = { lat: 21.029339, lng: 105.847729 };
   zoom = 9;
   markerOptions: google.maps.marker.AdvancedMarkerElementOptions = { gmpDraggable: false };
   markerPositions: google.maps.LatLngLiteral[] = [
      {
         lat: 21.029339 , lng: 105.847729
      }
   ];
   mapId: string = '1f226fafb6eac172'; // default style

   constructor() {}

   ngOnInit(): void {}

   moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng !== null) {
         this.center = event.latLng.toJSON();
      }
   }

   move(event: google.maps.MapMouseEvent) {
      if (event.latLng !== null) {
         this.display = event.latLng.toJSON();
      }
   }

   addMarker(event: google.maps.MapMouseEvent) {
      if (event.latLng !== null) {
         this.markerPositions.push(event.latLng.toJSON());
      }
   }
}
