import ScrollAnimate from "./modules/scroll-animate.js";
import MobileMenu from "./modules/mobile-menu.js";

const scrollAnimate = new ScrollAnimate('[date-animate= "scroll"]');
scrollAnimate.init();

const mobileMenu = new MobileMenu(
  '[data-menu = "hamburger"]',
  '[data-menu= "lista"]'
);
mobileMenu.init();
