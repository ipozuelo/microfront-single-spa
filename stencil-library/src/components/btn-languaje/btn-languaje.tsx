import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'btn-languaje',
  styleUrl: 'btn-languaje.css',
  shadow: true,
})
export class BtnLanguaje {

  @Prop() text:string = "Button"
  @Prop() lg: string = 'es';


  onChangeLanguaje (lg:string)  {
    localStorage.setItem("languaje",lg)
    window.location.reload()
  }

  render() {
    return (
      <Host>
        <button onClick={()=>{this.onChangeLanguaje(this.lg)}}>{this.text}</button>
      </Host>
    );
  }

}
