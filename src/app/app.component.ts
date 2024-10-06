import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'togokondi-landing-page';

  showmessage(msg:string){
    return msg;
  }

  additioncalculation(num1: number, num2: number){
    return num1+num2;
  }
}
