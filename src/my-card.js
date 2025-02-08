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
    this.description = "A cute Pokémon known for its loyalty and fighting spirit.";
    this.buttonText1 = "10 Quick Charge";
    this.buttonText2 = "Endure";
    this.link = "#";
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      background: { type: String },
      description: { type: String },
      buttonText1: { type: String },
      buttonText2: { type: String },
      link: { type: String }
    };
  }
  

  static get styles() {
    return css`
      :host {
        display: block;
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
        margin-top: 50px;
        padding: 1px 10px;
        color: black;
        border: 2px solid black;
        border-radius: 8px;
        background: none;
        cursor: pointer;
        font-size: 20px;
        text-shadow: 1px 1px 2px white;
      }

      .button2{
        margin-top: 25px;
        padding: 1px 55px;
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

  render() {
    return html`
      <div class="card" style="background-color: ${this.background};">
        <h2 class="card-title">${this.title}</h2>
        <img class="card-image" src="${this.image}" alt="${this.title}">
        <p>${this.description}</p>
        <button class="button">
          <a href="${this.link}" target="_blank">${this.buttonText1}</a>
        </button>
        <button class="button2">${this.buttonText2}</button>
      </div>
    `;
  }

  
}

customElements.define(MyCard.tag, MyCard);

