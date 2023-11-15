import { Component, h } from '@stencil/core';
import 'https://kit.fontawesome.com/94e65f6987.js'

@Component({
  tag: 'light-dark-mode',
  styleUrl: 'light-dark-mode.css',
  shadow: true,
})
export class LightDarkMode {

  

  handleClick() {

    const style = document.getElementById('theme-colors');
    const border = document.getElementById('colors-borders');

    if (style.getAttribute('href') === 'http://localhost:3000/css/colors/variables-dark-colors.css') {
        localStorage.setItem("theme","light")
        style.setAttribute('href', 'http://localhost:3000/css/colors/variables-general-colors.css');
        border.setAttribute('href', 'http://localhost:3000/css/borders/variables-border.css');
    } else {
      localStorage.setItem("theme","dark")
        style.setAttribute('href', 'http://localhost:3000/css/colors/variables-dark-colors.css');
        border.setAttribute('href', 'http://localhost:3000/css/borders/variables-border-dark-mode.css');
    }
  
  }

  render() {
  
    return (
      
      <button class="toggle-button" onClick={() => this.handleClick()}>

       <i class="fa-solid fa-circle-half-stroke"></i>
      
      </button>
    );
  }
}
