import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  'rxjs/add/operator/map';

/*
  Generated class for the SpotiappProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpotiappProvider {

  artists: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQDFMRtHDQcl5tq6mRBsTRLt_lus8OGVTgMoK7bL2rM9nJmeXSRwBE2IyUSQnzToOP-OW_FsQJvxdCkuncY';

  constructor(public http: HttpClient) {
    console.log('Servicio de spotify listo')
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getArtists(termino: string) {
    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers })
               .map((response: any) => {
                 this.artists = response.artists.items
                 return this.artists;
               });
  }

  getArtist(id: string) {
    let url = `${ this.urlSpotify }artists/${ id }`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getTop(id: string) {
    let url = `${ this.urlSpotify}artists/${ id }/top-tracks?country=CO`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers });

  }

}
