import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Event as RouterEvent, NavigationEnd, Router } from '@angular/router';
import { LangChangeEvent, TranslateService, TranslateModule } from '@ngx-translate/core';
import { Dict } from 'src/app/constant/dict';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [NgFor, TranslateModule]
})
export class HomeComponent implements OnInit {
  constructor(private translate : TranslateService,
    private router: Router){};

  displayedPhrase = '';
  private homePhrase = '';
  private index = 0;
  private typingSpeed = 15; // Milliseconds

  phrase : string = "";
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

  ngOnInit(): void {
    const randomPhraseKey = Dict.phrases[Math.floor(Math.random() * Dict.phrases.length)];

    this.translate.get(randomPhraseKey).subscribe((translatedPhrase: string) => {
      this.homePhrase = translatedPhrase;
      this.index = 0;
      this.displayedPhrase = '';
      this.typeCharacter();
    });
  
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.translate.get(randomPhraseKey).subscribe((translatedPhrase: string) => {
          this.homePhrase = translatedPhrase;
          this.index = 0;
          this.displayedPhrase = '';
          this.typeCharacter();
        });
      }
    });
  }

  ngOnChanges(): void {
    this.index = 0;
    this.displayedPhrase = '';
    this.typeCharacter();
  }

  private typeCharacter() {
    if (this.index < this.homePhrase.length) {
      let doubleTypeProbability = 0.35; // 20% chance to type two characters at once
      let isDoubleType = Math.random() < doubleTypeProbability;
      let increment = isDoubleType ? 2 : 1;
      this.displayedPhrase = this.homePhrase.slice(0, this.index + increment) + '|'; // Static cursor during typing
      this.index += increment;
      let randomDelay = Math.floor(Math.random() * 40);
      setTimeout(() => this.typeCharacter(), this.typingSpeed + randomDelay);
    } else {
      this.displayedPhrase = this.homePhrase + '<span class="blinking-cursor"></span>'; // Blinking cursor at the end
    }
  }
}
