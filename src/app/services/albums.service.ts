import { Injectable } from '@angular/core';
import { Candidat } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


  candidats: Candidat[] = [
    {
      name: "Claude",
      age: 25,
      email : "c@gmail.com"
    },
    {
      name: "Olivier",
      age: 26,
      email : "o@gmail.com"
    },
    {
      name: "Jean",
      age: 30,
      email : "j@gmail.com"
    },
    {
      name: "Mariem",
      age: 25,
      email : "m@gmail.com"
    }
  ];
  constructor() { }

  listCandidats() {
    return this.candidats
   }
}
