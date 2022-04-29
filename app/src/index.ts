/// <reference types="@types/google.maps" />

// import { User } from './User';
// import { Company } from './Company';

const mapEl = document.getElementById('map')! as HTMLDivElement;

new google.maps.Map(mapEl, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
