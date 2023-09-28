import { Component, h, State } from '@stencil/core';


@Component({
  tag: 'light-dark-mode',
  styleUrl: 'light-dark-mode.css',
  shadow: true,
})
export class LightDarkMode {

  @State() darkMode = false;

  handleClick() {

    const style = document.getElementById('theme-colors');
    if (style.getAttribute('href') === 'http://localhost:3000/css/colors/variables-dark-colors.css') {
        localStorage.setItem("theme","light")
        style.setAttribute('href', 'http://localhost:3000/css/colors/variables-general-colors.css');
    } else {
      localStorage.setItem("theme","dark")
        style.setAttribute('href', 'http://localhost:3000/css/colors/variables-dark-colors.css');
    }
  
    this.darkMode = !this.darkMode;
  }

  render() {
    const buttonText = this.darkMode ? 'Modo Claro' : 'Modo Oscuro';

    return (
      <button class="toggle-button" onClick={() => this.handleClick()}>
        {buttonText}
      </button>
    );
  }
}
