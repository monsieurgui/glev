import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projects = [
    { title: 'Climb Insight - Frontend', 
      description: "Frontend en Angular qui fournit une interface utilisateur interactive pour l'inscription, l'organisation de championnats d'escalade, et la consultation en direct des résultats sur mobiles et tablettes.", 
      url: 'https://github.com/monsieurgui/ClimbInsight-frontend',
      lang: 'ts'},
    { title: 'Climb Insight - Backend', 
      description: "Backend en Django qui gère l'enregistrement des utilisateurs, l'organisation des championnats d'escalade, et l'affichage en direct des résultats.", 
      url: 'https://github.com/monsieurgui/ClimbInsight-backend',
      lang: 'python' },
    { title: 'Game of life', 
      description: "Jeu fait avec Unity qui simule l'évolution d'une personne grâce à la prise de décisions.", 
      url: '#',
      lang: 'c++' },
    // Add more projects as needed
  ];
}
