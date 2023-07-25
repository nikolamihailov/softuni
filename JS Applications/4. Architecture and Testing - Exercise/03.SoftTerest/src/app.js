import { showHome } from "./views/home.js";
import { showRegister } from "./views/register.js";
import { showLogin } from "./views/login.js";
import { showCreate } from "./views/create.js";
import { showCatalog } from "./views/catalog.js";
import { showDetails } from "./views/details.js";
import { initiliazeRouter } from "./router.js";

const routes = {
    "/": showHome,
    "/login": showLogin,
    "/catalog": showCatalog,
    "/register": showRegister,
    "/details": showDetails,
    "/create": showCreate,
};

const router = initiliazeRouter(routes);
router.goTo("/");
router.updateNav();









