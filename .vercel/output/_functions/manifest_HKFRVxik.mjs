import { d as decodeKey } from './chunks/astro/server_BTXaB9v4.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D0DT4mci.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/sebaprogrammer/Desktop/proyectos/kreadium/","cacheDir":"file:///Users/sebaprogrammer/Desktop/proyectos/kreadium/node_modules/.astro/","outDir":"file:///Users/sebaprogrammer/Desktop/proyectos/kreadium/dist/","srcDir":"file:///Users/sebaprogrammer/Desktop/proyectos/kreadium/src/","publicDir":"file:///Users/sebaprogrammer/Desktop/proyectos/kreadium/public/","buildClientDir":"file:///Users/sebaprogrammer/Desktop/proyectos/kreadium/dist/client/","buildServerDir":"file:///Users/sebaprogrammer/Desktop/proyectos/kreadium/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.3.0_@types+node@22.13.4_jiti@1.21.7_rollup@4.34.8_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[],"routeData":{"route":"/api/send-quote","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-quote\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-quote","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-quote.ts","pathname":"/api/send-quote","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"external","src":"/_astro/index.CRSQ4ZwP.css"},{"type":"inline","content":".card-spotlight{position:relative;border-radius:1.5rem;border:1px solid #222;background-color:#111;padding:2rem;overflow:hidden;--mouse-x: 50%;--mouse-y: 50%;--spotlight-color: rgba(255, 255, 255, .05)}.card-spotlight:before{content:\"\";position:absolute;inset:0;background:radial-gradient(circle at var(--mouse-x) var(--mouse-y),var(--spotlight-color),transparent 80%);opacity:0;transition:opacity .5s ease;pointer-events:none}.card-spotlight:hover:before,.card-spotlight:focus-within:before{opacity:.6}\n@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translate(25%)}to{opacity:1;transform:translate(0)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translate(13%)}to{transform:scale(1) translateY(-45%) translate(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;pointer-events:none;box-sizing:border-box;padding:20px}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:\"\";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:\"\";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;animation:notyf-fadeinup .3s ease-in forwards;box-shadow:0 3px 7px #00000040;position:relative;padding:0 15px;border-radius:2px;max-width:300px;transform:translateY(25%);box-sizing:border-box;flex-shrink:0}.notyf__toast--disappear{transform:translateY(0);animation:notyf-fadeoutdown .3s forwards;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translate(0)}.notyf__toast--disappear .notyf__message{animation-delay:.05s}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;transform-origin:bottom right;right:0;top:0;border-radius:50%;transform:scale(0) translateY(-51%) translate(13%);z-index:5;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;animation:notyf-fadeinup .3s forwards;animation-delay:.3s;margin-right:13px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;animation:notyf-fadeinleft .3s forwards;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:#00000040;border:none;cursor:pointer;transition:opacity .2s ease,background-color .2s ease;outline:none;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:\"\";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:#00000026}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;animation:notyf-fadeinup .3s forwards;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px #00000021;width:100%}.notyf__dismiss{width:56px}}\n.parallax{position:relative;overflow:hidden}.scroller{display:flex;white-space:nowrap;text-align:center;font-family:sans-serif;font-size:2.25rem;font-weight:700;letter-spacing:-.02em;filter:drop-shadow(0 1px 1px rgba(0,0,0,.1))}.scroller span{flex-shrink:0}@media (min-width: 768px){.scroller{font-size:5rem;line-height:5rem}}\n.aurora-container{width:100%;height:100vh;position:absolute;inset:0;z-index:-9999}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/api/send-quote@_@ts":"pages/api/send-quote.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.3.0_@types+node@22.13.4_jiti@1.21.7_rollup@4.34.8_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/sebaprogrammer/Desktop/proyectos/kreadium/node_modules/.pnpm/astro@5.3.0_@types+node@22.13.4_jiti@1.21.7_rollup@4.34.8_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C3epC_E1.mjs","\u0000@astrojs-manifest":"manifest_HKFRVxik.mjs","/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/carousel-comment/CarouselComment":"_astro/CarouselComment.BLe-zNQY.js","/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/hero/Aurora.jsx":"_astro/Aurora.FeVn5BpX.js","/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/scroll-velocity/ScrollVelocity":"_astro/ScrollVelocity.BCX6vm27.js","/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/contact-form/ContactForm":"_astro/ContactForm.Co4An6K3.js","/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/card/SpotlightCard":"_astro/SpotlightCard.DAzS-Gi3.js","@astrojs/react/client.js":"_astro/client.Cvkkt_iK.js","/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DKqbGXPj.js","/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.Ddi3Ezje.js","/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/buttons/WhatsappButton.astro?astro&type=script&index=0&lang.ts":"_astro/WhatsappButton.astro_astro_type_script_index_0_lang.C_xAzUKI.js","astro:scripts/page.js":"_astro/page.V2R8AmkL.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-TN1ZFJYB0X\");"],["/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector('[data-collapse-toggle=\"navbar-sticky\"]'),t=document.getElementById(\"navbar-sticky\"),n=document.getElementById(\"menu\");e?.addEventListener(\"click\",()=>{n?.classList.toggle(\"bg-black\"),t?.classList.toggle(\"hidden\");const d=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",String(!d))}),window.addEventListener(\"resize\",()=>{window.matchMedia(\"(min-width: 768px)\").matches?n?.classList.remove(\"bg-black\"):(t?.classList.add(\"hidden\"),e?.setAttribute(\"aria-expanded\",\"false\"))})});"],["/Users/sebaprogrammer/Desktop/proyectos/kreadium/src/components/buttons/WhatsappButton.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"chatToggle\"),t=document.getElementById(\"chatOptions\");n?.addEventListener(\"click\",()=>{t?.classList.toggle(\"hidden\")});document.addEventListener(\"click\",c=>{const e=c.target;!n?.contains(e)&&!t?.contains(e)&&t?.classList.add(\"hidden\")});"]],"assets":["/_astro/index.CRSQ4ZwP.css","/favicon.svg","/_astro/Aurora.FeVn5BpX.js","/_astro/CarouselComment.BLe-zNQY.js","/_astro/ContactForm.Co4An6K3.js","/_astro/ScrollVelocity.BCX6vm27.js","/_astro/SpotlightCard.DAzS-Gi3.js","/_astro/client.Cvkkt_iK.js","/_astro/index.BwXjGcf2.css","/_astro/index.BxnrHOe8.js","/_astro/index.DmM0KDA7.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/page.V2R8AmkL.js","/images/bg-kreadium.webp","/images/logo-kreadium.webp","/icons/check.svg","/icons/fintoc.svg","/icons/flow.svg","/icons/mercado-pago.svg","/icons/venti.svg","/videos/shopify-kreadium.mp4","/_astro/page.V2R8AmkL.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"OtQY8MuO/4wrWuTYEXOG5eKIdePM1jWAHihGEzjFGZ8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
