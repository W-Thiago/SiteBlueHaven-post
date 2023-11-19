import ScrollAnimate from "./modules/scroll-animate.js";
import MobileMenu from "./modules/mobile-menu.js";
import FormMessage from "./modules/form-message.js";

const scrollAnimate = new ScrollAnimate('[date-animate= "scroll"]'); //seletor das seções animar
scrollAnimate.init();

const mobileMenu = new MobileMenu( //seletores do botão do menu hamburger e da lista (ul) dele, respectivamente.
  '[data-menu = "hamburger"]',
  '[data-menu= "lista"]'
);
mobileMenu.init();

const formMessage = new FormMessage({
  form: ".formjs", // seletor do formulário.
  button: "#enviar", // seletor do botão.
  error:
    "<div id= 'form-error'><h2> Oops!ocorreu um erro .</h2><p>Tenta novamente, ou envie uma mensagem para Thipsilva@outlook.com</p></div>", // seletor do error.
  success:
    "<div id= 'form-success'><h2>Mensagem enviada</h2><p>Agradecemos o seu contato e retornaremos em breve</p></div>", // seletor do sucesso.
});

formMessage.init();
