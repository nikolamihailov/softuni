import page from "../../../node_modules/page/page.mjs";
import { render } from "../../../node_modules/lit-html/lit-html.js";
import { layoutTemplate } from "./views/layout.js";
import { getUserData } from "./utils.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./api/auth.js";
import { dashBoardPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { createPage } from "./views/create.js";
import { editPage } from "./views/edit.js";

const root = document.getElementById("wrapper");
//const root = document.body;

page(decorateContext);
page("/index.html", "/");
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/logout", logoutAction);
page("/dashboard", dashBoardPage);
page("/create-offer", createPage);
page("/dashboard/:id", detailsPage);
page("/dashboard/edit/:id", editPage);

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