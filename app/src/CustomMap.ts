// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
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
    // mappable union type only care about 'location' property
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
