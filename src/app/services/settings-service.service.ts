import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private elementDOM = document.querySelector('#theme');

  constructor() {

    const url = localStorage.getItem('theme') || "./assets/css/colors/purple-dark.css"
    this.elementDOM?.setAttribute('href', url);
  }

  changeTheme( theme: string ) {

    const url = `./assets/css/colors/${ theme }.css`;

    this.elementDOM?.setAttribute('href', url);

    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  checkCurrentTheme() {

    const  elementSelectorDOM = document.querySelectorAll('.selector');

      elementSelectorDOM.forEach( elem => {

      elem.classList.remove('working');

      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.elementDOM?.getAttribute('href');

      if ( btnThemeUrl === currentTheme ) {

          elem.classList.add('working');

      }

  });

}
}
