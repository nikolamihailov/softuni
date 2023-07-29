import { html } from "../../node_modules/lit-html/lit-html.js";
import { getProfileMemes } from "../api/profile.js";
import { getUserData } from "../utils.js";

const profileTemplate = (user, userMemes) => html`
  <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${userMemes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
${userMemes.length > 0 ? html`
${userMemes.map(m => html`${memeTemplate(m)}`)}
` : html`          <p class="no-memes">No memes in database.</p>`}
                <!-- Display : If user doesn't have own memes  -->
      
            </div>
        </section>
`;

const memeTemplate = (m) => html`
   <div class="user-meme">
                    <p class="user-meme-title">${m.title}</p>
                    <img class="userProfileImage" alt="meme-img" src="${m.imageUrl}">
                    <a class="button" href="/details/${m._id}">Details</a>
                </div>
`;

export async function profilePage(ctx) {
    const user = getUserData();
    const userMemes = await getProfileMemes(user._id);
    ctx.render(profileTemplate(user, userMemes));

}