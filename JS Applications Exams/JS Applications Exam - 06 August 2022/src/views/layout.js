import { html } from "../../../../node_modules/lit-html/lit-html.js";
//import { getUserData } from "../utils.js";

export const layoutTemplate = (userData, content) => html`
  <header>
      <!-- Navigation -->
      <a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>
      <nav>
        <div>
          <a href="/dashboard">Dashboard</a>
        </div>
        ${userData ? html`<div class="user">
          <a href="/create-offer">Create Offer</a>
          <a href="/logout">Logout</a>
        </div>` : html`<div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}   
      </nav>
    </header>
    <main>${content}</main>
`;

