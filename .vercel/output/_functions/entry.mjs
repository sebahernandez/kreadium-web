import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BvziZfwz.mjs';
import { manifest } from './manifest_Cd21uhQI.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/send-email.astro.mjs');
const _page3 = () => import('./pages/api/send-quote.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/ecommerce.astro.mjs');
const _page6 = () => import('./pages/integraciones.astro.mjs');
const _page7 = () => import('./pages/precios.astro.mjs');
const _page8 = () => import('./pages/servicios.astro.mjs');
const _page9 = () => import('./pages/testimonios.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/send-email.ts", _page2],
    ["src/pages/api/send-quote.ts", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/ecommerce.astro", _page5],
    ["src/pages/integraciones.astro", _page6],
    ["src/pages/precios.astro", _page7],
    ["src/pages/servicios.astro", _page8],
    ["src/pages/testimonios.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "868d5eda-b592-4fa3-bab2-01d41bf77e71",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
