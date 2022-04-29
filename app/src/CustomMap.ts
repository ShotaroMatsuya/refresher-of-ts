import { User } from './User';
// import { Company } from './Company';

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  // addCompanyMarker(company: Company): void {}
}
