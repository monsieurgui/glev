import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private translate : TranslateService){};

  ngOnInit(): void {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }

  projects = [
    { title: 'climbinsight.frontendtitle', 
      description: "climbinsight.frontenddescription", 
      url: 'https://github.com/monsieurgui/ClimbInsight-frontend',
      lang: 'ts'},
    { title: 'climbinsight.backendtitle', 
      description: "climbinsight.backenddescription", 
      url: 'https://github.com/monsieurgui/ClimbInsight-backend',
      lang: 'python' },
    { title: 'gameoflife.title', 
      description: "gameoflife.description",
      url: '#',
      lang: 'c++' },
    // Add more projects as needed
  ];
}
