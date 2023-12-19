import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true,
    imports: [TranslateModule]
})
export class AboutComponent {
  raicDetails !: string[];
  code3Details !: string[];
  opqDetails !: string[];
  desjardinsDetails !: string[];

  constructor(private translate: TranslateService) {
    this.translate.get('code3.details').subscribe((res: string[]) => {
      this.code3Details = res;
    });
    this.translate.get('raic.details').subscribe((res: string[]) => {
      this.raicDetails = res;
    });
    this.translate.get('opq.details').subscribe((res: string[]) => {
      this.opqDetails = res;
    });
    this.translate.get('desjardins.details').subscribe((res: string[]) => {
      this.desjardinsDetails = res;
    });
  }

}
