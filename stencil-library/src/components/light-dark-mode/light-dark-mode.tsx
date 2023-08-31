import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'light-dark-mode',
  styleUrl: 'light-dark-mode.css',
  shadow: true,
})
export class LightDarkMode {
  @State() darkMode = false;

  handleClick() {
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
