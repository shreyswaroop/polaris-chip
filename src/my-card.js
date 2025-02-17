import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Riolu";
    this.image = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokedex/9/93/578px-Riolu_anime.png";
    this.background = "orange";
    
    this.buttonText1 = "10 Quick Charge";
    this.buttonText2 = "Endure";
    this.link = "#";
    this.fancy = false;
  }

  static get properties() {
    return {
      /*
      title: { type: String },
      image: { type: String },
      background: { type: String },
      description: { type: String },
      buttonText1: { type: String },
      buttonText2: { type: String },
      link: { type: String },
      fancy: {type: Boolean, reflect: true},
      */
      title: { type: String },
      image: { type: String },
      buttonText1: { type: String },
      buttonText2: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
  

  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([fancy]) .card {
        background-color: var(--my-card-fancy-bg, pink);
        border: 2px solid pink;
        box-shadow: 10px 5px 5px red;
      }

      .card {
        width: 200px;
        height: 400px;
        background-color: var(--card-background, orange);
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        padding: 16px;
        margin: 16px;
        color: black;
        text-shadow: 1px 1px 2px white;
      }

      .card-image{
        width: 200px;
        height:150px;
      }

      .fancy{
        background-color: purple;
      }

      .card-title {
        font-size: 30px;
        margin-bottom: 12px;
      }

      .button {
        margin-top: 40px;
        padding: 5px 10px;
        color: black;
        border: 2px solid black;
        border-radius: 8px;
        background: none;
        cursor: pointer;
        font-size: 20px;
        text-shadow: 1px 1px 2px white;
      }

      .button2{
        margin-top: 20px;
        padding: 5px 55px;
        color: black;
        border: 2px solid black;
        border-radius: 8px;
        background: none;
        cursor: pointer;
        font-size: 20px;
        text-shadow: 1px 1px 2px white;
      }

      button:focus,
      button:hover {
        color: white;
        background-color: black;
      }

    `;
  }

  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <h2 class="card-title">${this.title}</h2>
        <img class="card-image" src="${this.image}" alt="${this.title}">
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>${this.description}</summary>
          <div>
            <slot></slot>
          </div>
        </details>
        <div class="buttons">
          <a href="${this.link}" class="button">${this.buttonText1}</a>
          
          <button class="button">${this.buttonText2}</button>
        </div>
      </div>
    `;
  }

  
}

customElements.define(MyCard.tag, MyCard);

