import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { layoutTemplate } from "./views/layout.js";
import { getUserData } from "./utils.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./api/auth.js";
import { allMemesPage } from "./views/allMemes.js";
import { detailsPage } from "./views/details.js";
import { createPage } from "./views/createMeme.js";
import { editPage } from "./views/edit.js";
import { profilePage } from "./views/profile.js";

const root = document.getElementById("container");

page(decorateContext);
page("/index.html", "/");
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/logout", logoutAction);
page("/all-memes", allMemesPage);
page("/create-meme", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/my-profile", profilePage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    const user = getUserData();
    render(layoutTemplate(user, content), root);
}

function logoutAction(ctx) {
    logout();
    ctx.page.redirect("/");
}