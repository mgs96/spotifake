import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpotiappProvider } from '../../providers/spotiapp/spotiapp';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  termino: string = '';

  constructor(public navCtrl: NavController, private spotifyService: SpotiappProvider) {

  }

  getArtists(ev: any) {
    let termino = ev.target.value;
    console.log(this.spotifyService.getArtists(termino).subscribe(data => console.log(data)));
  }

}
