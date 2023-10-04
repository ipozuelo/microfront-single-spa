import { Component, h } from '@stencil/core';


@Component({
  tag: 'light-dark-mode',
  styleUrl: 'light-dark-mode.css',
  shadow: true,
})
export class LightDarkMode {

  

  handleClick() {

    const style = document.getElementById('theme-colors');
    if (style.getAttribute('href') === 'http://localhost:3000/css/colors/variables-dark-colors.css') {
        localStorage.setItem("theme","light")
        style.setAttribute('href', 'http://localhost:3000/css/colors/variables-general-colors.css');
    } else {
      localStorage.setItem("theme","dark")
        style.setAttribute('href', 'http://localhost:3000/css/colors/variables-dark-colors.css');
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
