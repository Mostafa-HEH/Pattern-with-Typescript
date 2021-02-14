export interface Mappale {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappale: Mappale): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappale.location.lat,
        lng: mappale.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappale.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
