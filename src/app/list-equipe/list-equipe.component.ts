import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models';
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {


  equipe: string = "Global Knowledge - Equipe Mobile"
  names : string[] = ["Bédélo","Nassim","Mariem","Isabelle","Lyam","Ilhem","Safa","Kenji","Catherine","Olivier","Ousmana","Wendong","Assia","Rado"]
  
  //students: Candidat[];
  
  students: Candidat[] = [
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

  ngOnInit(): void {
  }

}
