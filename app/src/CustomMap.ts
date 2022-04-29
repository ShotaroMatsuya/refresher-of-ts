// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map; //instance of the class
  private mapEl: HTMLDivElement;

  constructor(divId: string) {
    this.mapEl = document.getElementById(divId)! as HTMLDivElement;

    this.googleMap = new google.maps.Map(this.mapEl, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    // mappable interface type only care about whether or not it has 'location' property
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
