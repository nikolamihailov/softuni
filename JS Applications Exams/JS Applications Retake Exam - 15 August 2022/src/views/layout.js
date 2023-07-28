import { html } from "../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html`
   <header>
        <!-- Navigation -->
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/dashboard">Dashboard</a>
            <a href="/search">Search</a>
          </div>
${userData ? html`
    <div class="user">
            <a href="/add-pair">Add Pair</a>
            <a href="/logout">Logout</a>
          </div>

` : html`
    <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
          <!-- Logged-in users -->
      
          <!-- Guest users -->
      
        </nav>
      </header>
      <main>${content}</main>
`;