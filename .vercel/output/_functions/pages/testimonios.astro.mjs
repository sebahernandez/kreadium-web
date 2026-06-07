/* empty css                                    */
import { e as createComponent, r as renderTemplate, l as defineScriptVars, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BveUbbNs.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BlMhdGu1.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                                       */
import { Autoplay, Pagination } from 'swiper/modules';
import PropTypes from 'prop-types';
import { a as $$Index, $ as $$Index$1 } from '../chunks/index_CpseJUPH.mjs';
export { renderers } from '../renderers.mjs';

const RatingStars = ({ rating, maxStars = 5 }) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: `w-4 h-4 ${i <= rating ? "text-yellow-400" : "text-gray-600"} fill-current`,
          viewBox: "0 0 20 20",
          children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
        },
        i
      )
    );
  }
  return /* @__PURE__ */ jsx("div", { className: "flex space-x-1 mb-4", children: stars });
};
const CommentCarousel = ({ comments, interval = 4e3 }) => {
  if (!comments || comments.length === 0) {
    return /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-center", children: "No hay comentarios para mostrar." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "testimonials-carousel", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Autoplay, Pagination],
        autoplay: {
          delay: interval,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          clickable: true,
          bulletClass: "swiper-pagination-bullet testimonial-bullet",
          bulletActiveClass: "testimonial-bullet-active"
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
        className: "pb-16",
        children: comments.map((comment) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("div", { className: "group", children: /* @__PURE__ */ jsxs("div", { className: "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 h-[210px] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#4CD6C0]/10 flex flex-col", children: [
          /* @__PURE__ */ jsx(RatingStars, { rating: comment.rating }),
          /* @__PURE__ */ jsx("blockquote", { className: "text-gray-200 text-base leading-relaxed mb-4 italic h-[10px] overflow-hidden flex-1", children: /* @__PURE__ */ jsxs("div", { className: "line-clamp-3", children: [
            '"',
            comment.description,
            '"'
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mt-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  className: "w-14 h-14 rounded-full object-cover ring-2 ring-[rgba(76,214,192,0.3)] group-hover:ring-[rgba(76,214,192,0.5)] transition-all duration-300",
                  src: comment.image,
                  alt: `${comment.name}, cliente de Kreadium`,
                  width: "56",
                  height: "56",
                  loading: "lazy",
                  decoding: "async"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-5 h-5 bg-[#4CD6C0] rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-3 h-3 text-black",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                      clipRule: "evenodd"
                    }
                  )
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-lg", children: comment.name }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Cliente verificado" })
            ] })
          ] })
        ] }) }) }, comment.id))
      }
    ),
    /* @__PURE__ */ jsx("style", { jsx: "true", children: `
        :global(.testimonial-bullet) {
          background: rgba(76, 214, 192, 0.3) !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }

        :global(.testimonial-bullet-active) {
          background: #4cd6c0 !important;
          transform: scale(1.2) !important;
        }

        :global(.swiper-pagination) {
          bottom: 0 !important;
        }

        :global(.line-clamp-3) {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      ` })
  ] });
};
CommentCarousel.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
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

const comments = [{"id":1,"image":"https://randomuser.me/api/portraits/men/10.jpg","name":"Cristián Smith","rating":5,"description":"Kreadium fue clave para mi emprendimiento. ¡Excelente servicio!"},{"id":2,"image":"https://randomuser.me/api/portraits/women/10.jpg","name":"María José López","rating":5,"description":"Increíble experiencia con Kreadium. ¡Definitivamente volveré a contactarlos!"},{"id":3,"image":"https://randomuser.me/api/portraits/men/20.jpg","name":"Carlos Ramírez","rating":5,"description":"Atención rápida y efectiva. Kreadium superó mis expectativas."},{"id":4,"image":"https://randomuser.me/api/portraits/men/30.jpg","name":"Alejandro Caceres","rating":5,"description":"Trabajar con Kreadium fue una gran decisión. ¡Totalmente recomendado!"},{"id":5,"image":"https://randomuser.me/api/portraits/women/15.jpg","name":"Francisca Araya","rating":5,"description":"Kreadium me brindó una experiencia excepcional."},{"id":6,"image":"https://randomuser.me/api/portraits/men/40.jpg","name":"Andres Miranda","rating":5,"description":"Gracias a Kreadium, ahora tengo un sitio web funcional y productivo."},{"id":7,"image":"/src/assets/images/adrian-carcamo.png","name":"Adrián Cárcamo","rating":5,"description":"Excelente trabajo de Kreadium con mi empresa Maldito Humo."},{"id":8,"image":"/src/assets/images/luis-morales.png","name":"Luis Morales","rating":5,"description":"Muchas gracias Kreadium por su trabajo, quedo maravilloso el sitio web de mi empresa, 100% recomendables."}];
const testimonials = {
  comments,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const comments = testimonials.comments;
  return renderTemplate(_a || (_a = __template(["", '<section class="relative py-20 md:py-28 overflow-hidden" id="testimonials"> <!-- Efectos de fondo sutiles --> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(76,214,192,0.03)] to-transparent"></div> <div class="absolute top-10 left-4 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-[#4CD6C0] opacity-[0.08] rounded-full blur-[60px] md:blur-[80px]"></div> <div class="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-16 h-16 md:w-24 md:h-24 bg-[#09b397] opacity-[0.08] rounded-full blur-[60px] md:blur-[80px]"></div> <div class="container mx-auto max-w-7xl px-6 relative z-10"> <!-- Header mejorado --> <div class="max-w-3xl mx-auto text-center mb-20 md:mb-28"> <!-- Rating promedio --> <div class="flex items-center justify-center mt-8 space-x-2"> <div class="flex space-x-1"> ', ' </div> <span class="text-gray-300 font-medium">5.0 de 5</span> <span class="text-gray-400">\u2022</span> <span class="text-gray-400">', " rese\xF1as</span> </div> </div> <!-- Carousel mejorado --> ", ' </div> <!-- Structured Data - Reviews Schema --> <script type="application/ld+json">(function(){', '\n  {\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "name": "Kreadium SpA",\n    "aggregateRating": {\n      "@type": "AggregateRating",\n      "ratingValue": "5.0",\n      "reviewCount": comments.length,\n      "bestRating": "5",\n      "worstRating": "1"\n    },\n    "review": comments.map((comment) => ({\n      "@type": "Review",\n      "author": {\n        "@type": "Person",\n        "name": comment.name\n      },\n      "reviewRating": {\n        "@type": "Rating",\n        "ratingValue": comment.rating.toString(),\n        "bestRating": "5"\n      },\n      "reviewBody": comment.description\n    }))\n  }\n  })();<\/script> </section>'])), maybeRenderHead(), [...Array(5)].map((_, i) => renderTemplate`<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`), comments.length, renderComponent($$result, "CommentCarousel", CommentCarousel, { "comments": comments, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/carousel-comment/CarouselComment", "client:component-export": "default" }), defineScriptVars({ comments }));
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/Testimonials.astro", void 0);

const $$Testimonios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Testimonios de Clientes | Kreadium - Casos de \xC9xito", "description": "Historias reales de empresas que transformaron su presencia digital con Kreadium. 98% de clientes satisfechos, +50 proyectos completados, calificaci\xF3n 5 estrellas.", "ogTitle": "Testimonios de Clientes | Kreadium - Casos de \xC9xito", "ogDescription": "Historias reales de empresas que transformaron su presencia digital con Kreadium. 98% de clientes satisfechos, +50 proyectos completados, calificaci\xF3n 5 estrellas.", "canonical": "/testimonios", "data-astro-cid-poxa74gv": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section id="testimonios" class="page-hero scroll-mt-20 md:scroll-mt-24" data-astro-cid-poxa74gv><div class="container mx-auto max-w-7xl px-6 text-center relative z-10" data-astro-cid-poxa74gv><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style="background: rgba(76, 214, 192, 0.1); border: 1px solid rgba(76, 214, 192, 0.2); color: rgba(76, 214, 192, 0.9);" data-astro-cid-poxa74gv>
Testimonios
</div><h1 class="font-geist text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-[-0.03em] text-white" data-astro-cid-poxa74gv>
Lo que dicen<br data-astro-cid-poxa74gv><span class="gradient-text italic" data-astro-cid-poxa74gv>nuestros clientes</span></h1><p class="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto" data-astro-cid-poxa74gv>
Historias reales de empresas que transformaron su presencia digital con Kreadium.
</p></div></section><div class="section-divider-gradient" data-astro-cid-poxa74gv></div><div class="section-divider-glow" data-astro-cid-poxa74gv>${renderComponent($$result2, "Testimonials", $$Testimonials, { "data-astro-cid-poxa74gv": true })}</div><div class="section-divider-border" data-astro-cid-poxa74gv></div><section id="estadisticas" class="relative py-20 md:py-28 scroll-mt-20 md:scroll-mt-24" data-astro-cid-poxa74gv><div class="container mx-auto max-w-7xl px-6" data-astro-cid-poxa74gv><div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" data-astro-cid-poxa74gv><div class="text-center" data-astro-cid-poxa74gv><div class="text-5xl md:text-6xl font-bold text-teal-300 mb-4" data-astro-cid-poxa74gv>50+</div><div class="text-xl text-gray-400" data-astro-cid-poxa74gv>Proyectos Completados</div></div><div class="text-center" data-astro-cid-poxa74gv><div class="text-5xl md:text-6xl font-bold text-teal-300 mb-4" data-astro-cid-poxa74gv>98%</div><div class="text-xl text-gray-400" data-astro-cid-poxa74gv>Clientes Satisfechos</div></div><div class="text-center" data-astro-cid-poxa74gv><div class="text-5xl md:text-6xl font-bold text-teal-300 mb-4" data-astro-cid-poxa74gv>5★</div><div class="text-xl text-gray-400" data-astro-cid-poxa74gv>Calificación Promedio</div></div></div></div></section><div class="section-divider-border" data-astro-cid-poxa74gv></div><section id="cta-testimonios" class="relative py-20 md:py-28 scroll-mt-20 md:scroll-mt-24" data-astro-cid-poxa74gv><div class="container mx-auto max-w-4xl px-6 text-center" data-astro-cid-poxa74gv><div class="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent" data-astro-cid-poxa74gv><h2 class="font-geist text-3xl md:text-4xl font-semibold text-white mb-4 tracking-[-0.025em]" data-astro-cid-poxa74gv>
¿Listo para ser nuestro <span class="italic" data-astro-cid-poxa74gv>próximo caso de éxito</span>?
</h2><p class="text-gray-400 mb-8 text-lg" data-astro-cid-poxa74gv>
Únete a las empresas que ya confían en Kreadium
</p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-poxa74gv><a href="/contacto" class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-white text-black hover:bg-gray-100 transition-colors" data-astro-cid-poxa74gv>
Comenzar Proyecto
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-poxa74gv><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-poxa74gv></path></svg></a><a href="/servicios" class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-white/[0.1] text-white hover:bg-white/[0.05] transition-colors" data-astro-cid-poxa74gv>
Ver Servicios
</a></div></div></div></section>${renderComponent($$result2, "SpeedInsights", $$Index, { "data-astro-cid-poxa74gv": true })}${renderComponent($$result2, "Analytics", $$Index$1, { "data-astro-cid-poxa74gv": true })}` })}`;
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/pages/testimonios.astro", void 0);

const $$file = "/Users/sebacure/Desktop/proyectos/kreadium-web/src/pages/testimonios.astro";
const $$url = "/testimonios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
