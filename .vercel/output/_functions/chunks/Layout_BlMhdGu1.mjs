import { e as createComponent, m as maybeRenderHead, n as renderScript, r as renderTemplate, f as createAstro, s as spreadAttributes, h as addAttribute, k as renderComponent, u as unescapeHTML, o as Fragment, p as renderSlot, q as renderHead } from './astro/server_BveUbbNs.mjs';
import 'piccolore';
/* empty css                            */
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';

const $$WhatsappButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Chat Button with WhatsApp - Female Avatar -->${maybeRenderHead()}<div class="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"> <!-- Online Badge --> <div class="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap pointer-events-none z-10"> <span class="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> <span>En Línea</span> </div> <!-- Main Avatar Button --> <button id="chatToggle" class="relative w-14 h-14 md:w-16 md:h-16 rounded-full shadow-xl overflow-hidden border-2 border-green-400 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400" aria-label="Abrir menú de contacto por WhatsApp" aria-expanded="false" aria-haspopup="true"> <img src="/images/avatar-agente.jpg" alt="Agente de soporte" class="w-full h-full object-cover"> </button> <!-- Dropdown Menu --> <div id="chatOptions" class="hidden absolute bottom-20 md:bottom-24 right-0 bg-white rounded-xl shadow-xl p-4 w-56 md:w-64" role="menu" aria-label="Opciones de contacto por WhatsApp"> <p class="text-gray-700 font-semibold text-center text-sm mb-3">¿Cómo podemos ayudarte?</p> <a href="https://wa.me/56946441506" target="_blank" rel="noopener noreferrer" class="flex items-center p-2 rounded-lg hover:bg-gray-100 transition" aria-label="Contactar a Atención al Cliente por WhatsApp" role="menuitem"> <span class="text-green-600 text-xl" aria-hidden="true">💬</span> <span class="ml-3 text-gray-800 text-sm font-medium">Atención al Cliente</span> </a> </div> </div> ${renderScript($$result, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/buttons/WhatsappButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/buttons/WhatsappButton.astro", void 0);

const $$Astro$2 = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { text } = Astro2.props;
  return renderTemplate`<!-- <div class="christmas-offer-wrapper">
  <a href="#pricing" class="button christmas-offer" role="button" aria-label="Ver Oferta de Navidad - Ir a precios">
    <span class="button-text">PRECIOS</span>
  </a>
</div> -->${maybeRenderHead()}<a href="/precios" class="text-black text-heading rounded-full bg-gradient-to-r from-teal-200 to-teal-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-teal-400  dark:focus:ring-teal-700 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" data-astro-cid-zn4mzfy5> <span class="button-text" data-astro-cid-zn4mzfy5>PRECIOS</span> </a> `;
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/buttons/CallToAction.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1780808614,"icons":{"bolt":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 10V3L4 14h7v7l9-11z\"/>"},"browser":{"body":"<path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 8h16M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-2v4\"/>"},"calendar":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M16 2v4M8 2v4m-5 4h18\"/></g>"},"cart":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0\"/><path d=\"M17 17H6V3H4\"/><path d=\"m6 5 14 1-1 7H6\"/></g>"},"chart":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 3v18h18m-3-4V9m-5 8V5M8 17v-3\"/>"},"chat":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M17.802 17.292s.077-.055.2-.149c1.843-1.425 3-3.49 3-5.789 0-4.286-4.03-7.764-9-7.764s-9 3.478-9 7.764c0 4.288 4.03 7.646 9 7.646q.636 0 2.088-.084c1.262.82 3.104 1.493 4.716 1.493.499 0 .734-.41.414-.828-.486-.596-1.156-1.551-1.416-2.29z\"/><path d=\"M7.5 13.5c2.5 2.5 6.5 2.5 9 0\"/></g>"},"check-circle":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0\"/>"},"clock":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></g>"},"code":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m7 8-4 4 4 4m10-8 4 4-4 4M14 4l-4 16\"/>"},"instagram":{"body":"<path fill=\"currentColor\" d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881\"/>"},"Instagram_dark":{"body":"<path fill=\"#fff\" d=\"M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73 0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36 6.877-15.36 15.36-15.36 15.36 6.877 15.36 15.36\"/>","width":256,"height":256},"lightbulb":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 18h6m-5 4h4M12 2a7 7 0 0 0-7 7c0 3.87 3.13 7 7 7s7-3.13 7-7a7 7 0 0 0-7-7\"/>"},"linkedin":{"body":"<path fill=\"currentColor\" d=\"M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699z\"/>","width":20,"height":20},"pencil":{"body":"<path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 20h4L18.5 9.5a2.828 2.828 0 1 0-4-4L4 16zm9.5-13.5 4 4\"/>"},"rocket":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 13a8 8 0 0 1 16 0c0 4-4 7-8 7s-8-3-8-7m8-11v4m0 16v-4\"/>"},"tiktok":{"body":"<path fill=\"currentColor\" d=\"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 3 3 0 0 1 .88.13V9.4a7 7 0 0 0-.88-.05A6.33 6.33 0 0 0 5.76 20.5a6.34 6.34 0 0 0 10.86-4.43V7.83a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.9 4.9 0 0 1-1.8-.26z\"/>"},"tool":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065\"/><path d=\"M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/></g>"},"whatsapp":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"#00c677\" fill-rule=\"evenodd\" d=\"M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899 9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs></g>"},"wrench":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.7 6.3a5 5 0 0 1-7.4 7.4l-4 4a2 2 0 1 0 2.8 2.8l4-4a5 5 0 0 1 7.4-7.4z\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav id="menu" class="fixed w-full z-50 top-2 md:top-4 start-0 transition-all duration-[0.2s] px-2 md:px-4"> <div class="container mx-auto max-w-7xl backdrop-blur-md bg-[rgba(76,214,192,0.08)] rounded-xl md:rounded-2xl flex flex-wrap items-center justify-between py-2 px-3 md:py-4 md:px-6"> <a href="/" class="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse shrink-0" aria-label="Kreadium - Ir a la página de inicio"> <img src="/images/logo-kreadium.webp" class="w-[120px] md:w-[190px] h-auto" alt="Kreadium" width="190" height="32" loading="eager" fetchpriority="high" decoding="sync"> </a> <div class="flex md:order-2 gap-1.5 md:gap-3 rtl:space-x-reverse items-center"> <div class="flex items-center shrink-0"> ${renderComponent($$result, "CallToAction", $$CallToAction, { "text": "Cotizar Ahora" })} </div> <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center justify-center p-1.5 w-8 h-8 md:w-10 md:h-10 md:p-2 text-sm text-white bg-black border-2 border-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 shrink-0" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Abrir menú principal</span> <svg class="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"> <ul class="flex flex-col py-2 gap-2 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"> <li> <a href="/" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300" aria-current="page">Inicio</a> </li> <li> <a href="/servicios" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Servicios</a> </li> <li> <a href="/testimonios" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Testimonios</a> </li> <li> <a href="/precios" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Precios</a> </li> <li> <a href="/contacto" class="relative after:absolute after:bg-gray-200 after:bottom-[-10px] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Contacto</a> </li> </ul> <!-- Redes sociales para móvil --> <div class="block md:hidden mt-6 pt-4 border-t border-gray-600"> <p class="text-gray-300 text-sm mb-4 px-2">Síguenos</p> <div class="flex flex-col space-y-3 px-2"> <a href="https://www.instagram.com/agencia_kreadium/" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 text-gray-300 hover:text-[#4CD6C0] transition-colors" aria-label="Visitar perfil de Kreadium en Instagram"> <div class="w-8 h-8 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "class": "w-4 h-4 text-[#4CD6C0]", "aria-hidden": "true" })} </div> <span>Instagram</span> </a> <a href="https://www.tiktok.com/@kreadium" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 text-gray-300 hover:text-[#4CD6C0] transition-colors" aria-label="Visitar perfil de Kreadium en TikTok"> <div class="w-8 h-8 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tiktok", "class": "w-4 h-4 text-[#4CD6C0]", "aria-hidden": "true" })} </div> <span>TikTok</span> </a> </div> </div> </div> </div> </nav> ${renderScript($$result, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/Navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result, "Navbar", $$Navbar, {})} </header>`;
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-gradient-to-br from-black/95 via-gray-900/85 to-black/95 backdrop-blur-lg py-16 md:py-20 lg:py-24 overflow-hidden"> <!-- Efectos de fondo ultra prominentes --> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-gray-900/50 to-gray-800/30"></div> <div class="absolute inset-0 bg-gradient-to-br from-[#4CD6C0]/8 via-transparent to-[#09b397]/12"></div> <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-[#4CD6C0]/3 to-transparent"></div> <!-- Círculos de fondo súper prominentes --> <div class="absolute top-4 left-4 md:top-10 md:left-10 w-32 h-32 md:w-48 md:h-48 bg-[#4CD6C0] opacity-[0.18] rounded-full blur-[80px] md:blur-[140px]"></div> <div class="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-40 h-40 md:w-64 md:h-64 bg-[#09b397] opacity-[0.20] rounded-full blur-[100px] md:blur-[180px]"></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-[#4CD6C0] opacity-[0.08] rounded-full blur-[120px] md:blur-[250px]"></div> <div class="absolute top-8 right-8 md:top-20 md:right-1/4 w-20 h-20 md:w-32 md:h-32 bg-[#09b397] opacity-[0.12] rounded-full blur-[60px] md:blur-[100px]"></div> <!-- Patrón de puntos más visible --> <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle at 1px 1px, rgba(76,214,192,0.9) 1px, transparent 0); background-size: 20px 20px;"></div> <!-- Líneas de luz sutiles --> <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4CD6C0]/40 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#09b397]/30 to-transparent"></div> <div class="container mx-auto max-w-7xl px-6 relative z-10"> <!-- Sección principal --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 md:mb-20"> <!-- Columna de marca --> <div class="lg:col-span-2 space-y-8"> <div class="space-y-6"> <img src="/images/logo-kreadium.webp" class="w-[120px] md:w-[190px] h-auto" alt="Kreadium" width="190" height="32" loading="lazy" decoding="async"> <p class="text-gray-300 text-lg leading-relaxed max-w-2xl">
Diseñamos y desarrollamos soluciones digitales excepcionales que transforman ideas en experiencias extraordinarias.
</p> </div> <!-- Información de contacto --> <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6"> <h3 class="text-lg font-semibold text-white mb-4">Kreadium Chile</h3> <div class="space-y-3"> <div class="flex items-center space-x-3"> <div class="w-5 h-5 rounded-full bg-[rgba(76,214,192,0.2)] flex items-center justify-center"> <div class="w-2 h-2 rounded-full bg-[#4CD6C0]"></div> </div> <span class="text-gray-300">Antonio Bellet 193 of 1210 Providencia, Santiago.</span> </div> <div class="flex items-center space-x-3"> <div class="w-5 h-5 rounded-full bg-[rgba(76,214,192,0.2)] flex items-center justify-center"> <div class="w-2 h-2 rounded-full bg-[#4CD6C0]"></div> </div> <a href="mailto:contacto@kreadium.cl" class="text-gray-300 hover:text-[#4CD6C0] transition-colors" aria-label="Enviar correo a contacto@kreadium.cl">
contacto@kreadium.cl
</a> </div> </div> </div> </div> <!-- Columna de redes sociales --> <div class="space-y-8"> <div> <h3 class="text-lg font-semibold text-white mb-6">Síguenos</h3> <div class="space-y-4"> <a href="https://www.instagram.com/agencia_kreadium/" target="_blank" rel="noopener noreferrer" class="group flex items-center space-x-4 p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(76,214,192,0.3)] transition-all duration-300" aria-label="Visitar perfil de Kreadium en Instagram"> <div class="w-10 h-10 rounded-xl bg-[rgba(76,214,192,0.1)] flex items-center justify-center group-hover:bg-[rgba(76,214,192,0.2)] transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "class": "w-5 h-5 text-[#4CD6C0]", "aria-hidden": "true" })} </div> <div> <span class="text-white font-medium">Instagram</span> <p class="text-gray-400 text-sm">Síguenos para inspiración</p> </div> </a> <a href="https://www.tiktok.com/@kreadium" target="_blank" rel="noopener noreferrer" class="group flex items-center space-x-4 p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(76,214,192,0.3)] transition-all duration-300" aria-label="Visitar perfil de Kreadium en TikTok"> <div class="w-10 h-10 rounded-xl bg-[rgba(76,214,192,0.1)] flex items-center justify-center group-hover:bg-[rgba(76,214,192,0.2)] transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tiktok", "class": "w-5 h-5 text-[#4CD6C0]", "aria-hidden": "true" })} </div> <div> <span class="text-white font-medium">TikTok</span> <p class="text-gray-400 text-sm">Contenido creativo diario</p> </div> </a> </div> </div> </div> </div> <!-- Sección inferior sin separador --> <div class="pt-12 mt-8"> <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0"> <!-- Copyright --> <div class="text-center lg:text-left"> <p class="text-gray-400">&copy; 2025 Kreadium Chile. Todos los derechos reservados.</p> <p class="text-gray-500 text-sm mt-1">Desarrollando el futuro digital.</p> </div> <!-- Navegación --> <nav class="flex flex-wrap justify-center gap-8" aria-label="Navegación del pie de página"> <a href="/" class="text-gray-400 hover:text-[#4CD6C0] transition-colors font-medium" aria-label="Ir a la página de Inicio">Inicio</a> <a href="/servicios" class="text-gray-400 hover:text-[#4CD6C0] transition-colors font-medium" aria-label="Ir a la página de Servicios">Servicios</a> <a href="/testimonios" class="text-gray-400 hover:text-[#4CD6C0] transition-colors font-medium" aria-label="Ir a la página de Testimonios">Testimonios</a> <a href="/precios" class="text-gray-400 hover:text-[#4CD6C0] transition-colors font-medium" aria-label="Ir a la página de Precios">Precios</a> <a href="/contacto" class="text-gray-400 hover:text-[#4CD6C0] transition-colors font-medium" aria-label="Ir a la página de Contacto">Contacto</a> </nav> </div> </div> </div> </footer>`;
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Agencia de desarrollo web profesional en Santiago, Chile. Expertos en Shopify, WordPress y Next.js. Dise\xF1o web responsivo, SEO optimizado y soluciones e-commerce escalables.",
    ogTitle = title,
    ogDescription = description,
    ogImage = "https://kreadium.cl/og-tags.png",
    canonical = Astro2.url.pathname,
    noindex = false
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><!-- Theme color meta tags --><meta name="theme-color" content="#4CD6C0"><meta name="msapplication-TileColor" content="#4CD6C0"><!-- Preconnect to critical third-party origins (highest priority) --><link rel="preconnect" href="https://www.googletagmanager.com"><!-- Preload critical font files for better performance --><!-- Only preload fonts that are used above the fold --><link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Inter-Medium.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Inter-SemiBold.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Inter-Bold.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Inter-ExtraBold.woff2" as="font" type="font/woff2" crossorigin><!-- Preload Geist variable font for headings --><link rel="preload" href="/fonts/Geist-Variable.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Geist-Italic.woff2" as="font" type="font/woff2" crossorigin><!-- Preload critical above-the-fold resources --><link rel="preload" href="/images/logo-kreadium.webp" as="image" type="image/webp" fetchpriority="high"><!-- DNS prefetch for other domains (lower priority) --><link rel="dns-prefetch" href="https://vercel.live"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="geo.region" content="CL-RM"><meta name="geo.placename" content="Santiago, Chile"><!-- Open Graph Meta Tags --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:site_name" content="Kreadium"><meta property="og:locale" content="es_CL"><!-- Twitter Card Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:site" content="@kreadium"><meta name="twitter:creator" content="@kreadium"><!-- Meta Tags adicionales recomendados --><meta name="description"', '><meta name="author" content="Kreadium SpA"><meta name="robots"', '><!-- Favicon --><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- Canonical URL --><link rel="canonical"', '><!-- Search Console --><meta name="google-site-verification" content="nym61f8HzIaAPGnOQEDUEEaCC3UwC-jJ0cUkCCpG_UM"><!-- Robots --><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><title>', `</title><!-- Critical CSS inline for immediate rendering (eliminates render-blocking) --><!-- Deferred Analytics - Load after page is interactive --><script>
			// Defer GTM and Analytics to not block rendering
			function loadAnalytics() {
				// Google Tag Manager
				(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-5WJQJBJW');
			}

			// Load analytics after page is interactive
			if ('requestIdleCallback' in window) {
				requestIdleCallback(loadAnalytics, { timeout: 2000 });
			} else {
				// Fallback for browsers without requestIdleCallback
				if (document.readyState === 'complete') {
					loadAnalytics();
				} else {
					window.addEventListener('load', loadAnalytics);
				}
			}
		<\/script><!-- End Deferred Analytics --><!-- Structured Data - Organization Schema --><script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Kreadium SpA",
			"url": "https://kreadium.cl",
			"logo": "https://kreadium.cl/images/logo-kreadium.webp",
			"description": "Agencia de desarrollo web en Chile especializada en WordPress, Shopify y ecommerce",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Antonio Bellet 193 OF 1210",
				"addressLocality": "Providencia",
				"addressRegion": "Santiago",
				"addressCountry": "CL"
			},
			"contactPoint": {
				"@type": "ContactPoint",
				"email": "contacto@kreadium.cl",
				"contactType": "customer service",
				"availableLanguage": "Spanish"
			},
			"sameAs": [
				"https://www.linkedin.com/company/kreadium-spa/",
				"https://www.instagram.com/agencia_kreadium/"
			],
			"areaServed": {
				"@type": "Country",
				"name": "Chile"
			}
		}
		<\/script><!-- Structured Data - LocalBusiness Schema --><script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"@id": "https://kreadium.cl",
			"name": "Kreadium SpA",
			"image": "https://kreadium.cl/images/logo-kreadium.webp",
			"email": "contacto@kreadium.cl",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Antonio Bellet 193 OF 1210",
				"addressLocality": "Providencia",
				"addressRegion": "RM",
				"addressCountry": "CL"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": -33.4372,
				"longitude": -70.6506
			},
			"openingHours": "Mo-Fr 09:00-18:00",
			"priceRange": "$$"
		}
		<\/script><!-- Structured Data - WebSite Schema with SearchAction --><script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Kreadium",
			"url": "https://kreadium.cl",
			"potentialAction": {
				"@type": "SearchAction",
				"target": "https://kreadium.cl/buscar?q={search_term_string}",
				"query-input": "required name=search_term_string"
			}
		}
		<\/script>`, "</head> <body data-astro-cid-sckkx6r4> ", " ", " ", " ", ' <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WJQJBJW" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-sckkx6r4></iframe></noscript> <!-- End Google Tag Manager (noscript) --> </body></html>'])), addAttribute(ogTitle, "content"), addAttribute(ogDescription, "content"), addAttribute(ogImage, "content"), addAttribute(`https://kreadium.cl${canonical}`, "content"), addAttribute(ogTitle, "content"), addAttribute(ogDescription, "content"), addAttribute(ogImage, "content"), addAttribute(description, "content"), addAttribute(noindex ? "noindex, follow" : "index, follow", "content"), addAttribute(`https://kreadium.cl${canonical}`, "href"), title, renderHead(), renderComponent($$result, "WhatsappButton", $$WhatsappButton, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }));
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
