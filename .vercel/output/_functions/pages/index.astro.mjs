/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderHead, b as renderSlot, f as renderTemplate, m as maybeRenderHead, g as renderComponent, h as addAttribute, i as renderScript, s as spreadAttributes, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_o8u6Phv0.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import PropTypes from 'prop-types';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Kreadium - Construimos tu presencia digital"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/workspaces/kreadium/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button data-astro-cid-zn4mzfy5> ${text} </button> `;
}, "/workspaces/kreadium/src/components/buttons/CallToAction.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-[--bg-dark]/70 fixed w-full z-20 top-0 start-0 backdrop-blur-md px-8"> <div class="container mx-auto flex flex-wrap items-center justify-between py-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/images/logo-kreadium.webp" class="h-5 md:h-8" alt="kreadium"> </a> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <div class="relative group">${renderComponent($$result, "CallToAction", $$CallToAction, { "text": "Cotizar Ahora" })}</div> <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white bg-black border border-white rounded-lg md:hidden hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"> <ul class="flex flex-col py-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> <li> <a href="#" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300" aria-current="page">Inicio</a> </li> <li> <a href="#" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Servicios</a> </li> <li> <a href="#" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Testimonios</a> </li> <li> <a href="#" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Contacto</a> </li> </ul> </div> </div> </nav>`;
}, "/workspaces/kreadium/src/components/Navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result, "Navbar", $$Navbar, {})} </header>`;
}, "/workspaces/kreadium/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex flex-col items-center justify-center text-white text-center h-[500px] md:h-[calc(100vh-0rem)]"> <div class="absolute inset-x-0 top-0 h-[100vh] w-full bg-[url('/images/bg-kreadium.webp')] bg-cover bg-center z-[-2]"></div> <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#1A1D1F] z-[-1]"></div> <span class="text-gray-200 bg-stone-950 rounded-full px-4 p-2 bg-opacity-40 text-sm md:text-xl">
Creamos tu presencial digital perfecta
</span> <h1 class="text-3xl md:text-8xl font-bold">
Construyamos
<span class="bg-gradient-to-r from-[var(--accent)] via-teal-300 to-teal-700 bg-clip-text text-transparent">
juntos
</span> tu<br>presencia digital
</h1> <p class="text-sm md:text-xl py-5 px-2 text-gray-300 text-balance">
Diseño profesional y desarrollo a medida para tu negocio.<br>
Transformamos tu visión en una presencia digital impactante.
</p> </section>`;
}, "/workspaces/kreadium/src/components/Hero.astro", void 0);

const $$ServiceSelector = createComponent(($$result, $$props, $$slots) => {
  const questions = [
    {
      id: "purpose",
      question: "\xBFCu\xE1l es el principal objetivo de tu sitio web?",
      options: [
        { value: "showcase", label: "Mostrar informaci\xF3n de mi empresa/marca", description: "Ideal para presentar tu empresa y servicios" },
        { value: "sell", label: "Vender productos online", description: "Para crear una tienda virtual completa" },
        { value: "generate_leads", label: "Generar leads/contactos", description: "Enfocado en captar potenciales clientes" },
        { value: "pos", label: "Gestionar mi negocio", description: "Sistema de punto de venta y gesti\xF3n" }
      ]
    },
    {
      id: "size",
      question: "\xBFQu\xE9 cantidad de contenido planeas tener?",
      options: [
        { value: "small", label: "1-5 p\xE1ginas", description: "Sitio web peque\xF1o y conciso" },
        { value: "medium", label: "6-15 p\xE1ginas", description: "Sitio web mediano con secciones detalladas" },
        { value: "large", label: "M\xE1s de 15 p\xE1ginas", description: "Sitio web grande con mucho contenido" }
      ]
    },
    {
      id: "features",
      question: "\xBFQu\xE9 funcionalidades necesitas?",
      multiple: true,
      options: [
        { value: "blog", label: "Blog", description: "Para publicar contenido regularmente" },
        { value: "forms", label: "Formularios personalizados", description: "Para captar informaci\xF3n de usuarios" },
        { value: "users", label: "\xC1rea de usuarios", description: "Para contenido exclusivo" },
        { value: "payments", label: "Pagos online", description: "Para ventas o suscripciones" },
        { value: "multilang", label: "Multi-idioma", description: "Contenido en varios idiomas" }
      ]
    },
    {
      id: "timeline",
      question: "\xBFCu\xE1l es tu tiempo ideal de implementaci\xF3n?",
      options: [
        { value: "urgent", label: "2-3 semanas", description: "Implementaci\xF3n express" },
        { value: "normal", label: "4-6 semanas", description: "Tiempo est\xE1ndar" },
        { value: "relaxed", label: "8+ semanas", description: "Desarrollo detallado" }
      ]
    },
    {
      id: "budget",
      question: "\xBFCu\xE1l es tu presupuesto aproximado?",
      options: [
        { value: "basic", label: "$500.000 - $1.000.000", description: "Proyecto b\xE1sico" },
        { value: "standard", label: "$1.000.000 - $2.500.000", description: "Proyecto est\xE1ndar" },
        { value: "premium", label: "$2.500.000+", description: "Proyecto premium" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="service-selector" id="cotizar" data-astro-cid-3lcdxzxq> <h2 data-astro-cid-3lcdxzxq>Descubre tu solución ideal</h2> <p data-astro-cid-3lcdxzxq>Responde algunas preguntas para ayudarnos a entender mejor tu proyecto</p> <div class="questions-container" data-astro-cid-3lcdxzxq> ${questions.map((q, index) => renderTemplate`<div class="question-step"${addAttribute(`question-${q.id}`, "id")}${addAttribute(index + 1, "data-step")} data-astro-cid-3lcdxzxq> <div class="progress-bar" data-astro-cid-3lcdxzxq> <div class="progress"${addAttribute(`width: ${(index + 1) / questions.length * 100}%`, "style")} data-astro-cid-3lcdxzxq></div> </div> <h3 data-astro-cid-3lcdxzxq>${q.question}</h3> <div class="options-grid" data-astro-cid-3lcdxzxq> ${q.options.map((option) => renderTemplate`<label class="option-card" data-astro-cid-3lcdxzxq> <input${addAttribute(q.multiple ? "checkbox" : "radio", "type")}${addAttribute(q.id, "name")}${addAttribute(option.value, "value")} data-astro-cid-3lcdxzxq> <div class="option-content" data-astro-cid-3lcdxzxq> <h4 data-astro-cid-3lcdxzxq>${option.label}</h4> <p data-astro-cid-3lcdxzxq>${option.description}</p> </div> </label>`)} </div> </div>`)} <div class="question-step" id="contact-form"${addAttribute(questions.length + 1, "data-step")} data-astro-cid-3lcdxzxq> <div class="progress-bar" data-astro-cid-3lcdxzxq> <div class="progress" style="width: 100%" data-astro-cid-3lcdxzxq></div> </div> <h3 data-astro-cid-3lcdxzxq>Datos de contacto</h3> <form class="contact-form" data-astro-cid-3lcdxzxq> <div class="form-grid" data-astro-cid-3lcdxzxq> <div class="form-group" data-astro-cid-3lcdxzxq> <label for="name" data-astro-cid-3lcdxzxq>Nombre Completo</label> <input type="text" id="name" required data-astro-cid-3lcdxzxq> </div> <div class="form-group" data-astro-cid-3lcdxzxq> <label for="email" data-astro-cid-3lcdxzxq>Email</label> <input type="email" id="email" required data-astro-cid-3lcdxzxq> </div> <div class="form-group" data-astro-cid-3lcdxzxq> <label for="phone" data-astro-cid-3lcdxzxq>Teléfono</label> <input type="tel" id="phone" data-astro-cid-3lcdxzxq> </div> <div class="form-group" data-astro-cid-3lcdxzxq> <label for="company" data-astro-cid-3lcdxzxq>Empresa</label> <input type="text" id="company" data-astro-cid-3lcdxzxq> </div> </div> <div class="form-group full-width" data-astro-cid-3lcdxzxq> <label for="message" data-astro-cid-3lcdxzxq>Comentarios adicionales</label> <textarea id="message" rows="4" data-astro-cid-3lcdxzxq></textarea> </div> </form> </div> </div> <div class="navigation-buttons" data-astro-cid-3lcdxzxq> <button class="back-btn" id="backBtn" data-astro-cid-3lcdxzxq>Anterior</button> <button class="continue-btn" id="nextBtn" data-astro-cid-3lcdxzxq>Continuar</button> </div> </section>  ${renderScript($$result, "/workspaces/kreadium/src/components/ServiceSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/kreadium/src/components/ServiceSelector.astro", void 0);

const $$ServicesItems = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Dise\xF1o Gr\xE1fico",
      description: "Creamos identidades visuales \xFAnicas que reflejan la esencia de tu marca."
    },
    {
      title: "Dise\xF1o Web",
      description: "Dise\xF1amos sitios atractivos y funcionales para una experiencia \xFAnica."
    },
    {
      title: "Desarrollo Web",
      description: "Desarrollamos sitios web r\xE1pidos, seguros y optimizados para SEO."
    },
    {
      title: "Ecommerce",
      description: "Construimos tiendas online escalables y f\xE1ciles de gestionar."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="py-16 px-4 sm:px-6 lg:px-8 "> <div class="max-w-7xl mx-auto text-center"> <h2 class="text-3xl text-white sm:text-4xl md:text-6xl font-bold">Nuestros Servicios</h2> <p class="mt-4 text-lg text-gray-400">Ofrecemos soluciones creativas y técnicas para impulsar tu negocio.</p> <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${services.map((service) => renderTemplate`<div class="flex"> <div class="group w-full rounded-md bg-gradient-to-r from-[var(--accent)] via-teal-300 to-teal-700 p-1 transition-transform duration-300 hover:scale-105 hover:shadow-lg"> <div class="relative flex h-full w-full items-start bg-[var(--bg-dark)] rounded-md p-6 transition-all duration-500"> <div class="absolute inset-2 rounded-lg bg-gradient-to-tl from-bg-gray-800 via-stone-900 to-gray-600 opacity-0 transition-opacity duration-500 group-hover:opacity-40 blur-lg"></div> <div class="relative z-10"> <h1 class="text-3xl text-white text-left">${service.title}</h1> <p class="text-sm leading-5 text-gray-400 sm:text-base sm:leading-7 text-left mt-4">${service.description}</p> </div> </div> </div> </div>`)} </div> </div> </div>`;
}, "/workspaces/kreadium/src/components/ServicesItems.astro", void 0);

const styles = {
  card: {
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    maxWidth: "500px",
    height: "160px",
    margin: "auto"
  },
  name: {
    fontSize: "1.2rem",
    color: "#fff"
  },
  stars: {
    marginBottom: "0.5rem"
  },
  description: {
    textAlign: "left",
    fontSize: "1rem",
    marginTop: "0.5rem",
    height: "50px"
  }
};
const RatingStars = ({ rating, maxStars = 5 }) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      /* @__PURE__ */ jsx(
        "span",
        {
          style: { color: i <= rating ? "#FFD700" : "#ddd", fontSize: "1.2rem" },
          children: "★"
        },
        i
      )
    );
  }
  return /* @__PURE__ */ jsx("div", { style: styles.stars, children: stars });
};
const CommentCarousel = ({ comments, interval = 3e3 }) => {
  if (!comments || comments.length === 0) {
    return /* @__PURE__ */ jsx("p", { children: "No hay comentarios para mostrar." });
  }
  return /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Autoplay, Pagination],
      autoplay: { delay: interval, disableOnInteraction: false },
      loop: true,
      slidesPerView: 1,
      breakpoints: {
        480: {
          slidesPerView: 1,
          // En celulares
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          // En tablets pequeñas
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          // En pantallas grandes
          spaceBetween: 10
        }
      },
      style: { paddingBottom: "3rem" },
      children: comments.map((comment) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { style: styles.card, children: [
        /* @__PURE__ */ jsx("div", { className: "w-28", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "rounded-full w-16 h-16",
            src: comment.image,
            alt: comment.name,
            style: styles.image
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col", children: [
          /* @__PURE__ */ jsx("h3", { style: styles.name, children: comment.name }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400", style: styles.description, children: comment.description }),
          /* @__PURE__ */ jsx(RatingStars, { rating: comment.rating })
        ] })
      ] }) }, comment.id))
    }
  );
};
CommentCarousel.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  interval: PropTypes.number
};
RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
  maxStars: PropTypes.number
};
RatingStars.defaultProps = {
  maxStars: 5
};

const comments = [{"id":1,"image":"https://randomuser.me/api/portraits/men/10.jpg","name":"Juan Pérez","rating":5,"description":"Excelente servicio, lo recomiendo 100% para emprendedores."},{"id":2,"image":"https://randomuser.me/api/portraits/women/10.jpg","name":"María José López","rating":5,"description":"La experiencia fue increíble, sin duda volveré."},{"id":3,"image":"https://randomuser.me/api/portraits/men/20.jpg","name":"Carlos Ramírez","rating":5,"description":"Un sitio fenomenal, atención rápida a todos mis requerimientos."},{"id":4,"image":"https://randomuser.me/api/portraits/men/30.jpg","name":"Alejandro Caceres","rating":5,"description":"Excelente servicio, recomiendo trabajar con Kreadium."},{"id":5,"image":"https://randomuser.me/api/portraits/women/15.jpg","name":"Francisca Araya","rating":5,"description":"La experiencia fue increíble, sin duda volveré con ellos."},{"id":6,"image":"https://randomuser.me/api/portraits/men/40.jpg","name":"Andres Miranda","rating":5,"description":"Ahora tengo mi sitio web funcional y productivo, gracias Kreadium."}];
const testimonials = {
  comments,
};

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const comments = testimonials.comments;
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto"> <h2 class="text-3xl text-white sm:text-4xl md:text-6xl font-bold text-center">Testimonios</h2> <p class="mt-4 text-lg text-gray-400 text-center mb-5">Esto es lo que nuestros clientes opinan de nosotros.</p> ${renderComponent($$result, "CommentCarousel", CommentCarousel, { "comments": comments, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspaces/kreadium/src/components/carousel-comment/CarouselComment", "client:component-export": "default" })} </div>`;
}, "/workspaces/kreadium/src/components/Testimonials.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1739766464,"icons":{"facebook":{"body":"<g fill=\"url(#a)\"><defs><linearGradient id=\"a\" x1=\"50%\" x2=\"50%\" y1=\"97.078%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#0062E0\"/><stop offset=\"100%\" stop-color=\"#19AFFF\"/></linearGradient></defs><path d=\"M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4z\"/><path fill=\"#FFF\" d=\"m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7q1.5.3 3 .3c1.5 0 2-.1 3-.3V23z\"/></g>","width":36,"height":36},"Instagram_dark":{"body":"<path fill=\"#fff\" d=\"M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73 0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36 6.877-15.36 15.36-15.36 15.36 6.877 15.36 15.36\"/>","width":256,"height":256}}}};

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/workspaces/kreadium/node_modules/.pnpm/astro-icon@1.1.5/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black/30 py-16 px-8"> <div class="container mx-auto flex flex-col md:flex-row justify-between items-start mb-12 space-y-8 md:space-y-0"> <div class="footer-brand md:w-1/2"> <img src="/images/logo-kreadium.webp" class="h-8 my-2" alt="kreadium"> <p class="text-white text-sm md:text-base leading-relaxed">
Diseñamos y desarrollamos soluciones digitales excepcionales.<br>
Convierte tu visión en una realidad.
</p> </div> <div class="social-links flex flex-col md:flex-row gap-4 md:gap-6"> <div class="flex gap-2 items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "facebook" })} <a href="#" aria-label="Facebook" class="text-white hover:text-gray-400 transition-colors text-sm md:text-base">Facebook</a> </div> <div class="flex gap-2 items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "Instagram_dark" })} <a href="#" aria-label="Instagram" class="text-white hover:text-gray-400 transition-colors text-sm md:text-base">Instagram</a> </div> </div> </div> <div class="container mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0"> <p class="text-white/80 text-sm md:text-base">&copy; 2025 Kreadium. Todos los derechos reservados.</p> <nav class="flex flex-wrap justify-center md:justify-start gap-6"> <a href="#inicio" class="text-white/80 hover:text-white transition-colors text-sm md:text-base">Inicio</a> <a href="#servicios" class="text-white/80 hover:text-white transition-colors text-sm md:text-base">Servicios</a> <a href="#cotizar" class="text-white/80 hover:text-white transition-colors text-sm md:text-base">Cotizar</a> <a href="#contacto" class="text-white/80 hover:text-white transition-colors text-sm md:text-base">Contacto</a> </nav> </div> </footer>`;
}, "/workspaces/kreadium/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kreadium - Construimos tu presencia digital" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ServicesItems", $$ServicesItems, {})} ${renderComponent($$result2, "ServiceSelector", $$ServiceSelector, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "ContactForm", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/workspaces/kreadium/src/components/contact-form/ContactForm", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/workspaces/kreadium/src/pages/index.astro", void 0);

const $$file = "/workspaces/kreadium/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
