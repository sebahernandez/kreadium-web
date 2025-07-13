import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BEJ6Snc2.mjs';
import { manifest } from './manifest_DD6Kx6pF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/send-email.astro.mjs');
const _page2 = () => import('./pages/api/send-quote.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.3.0_@types+node@22.13.4_jiti@1.21.7_rollup@4.34.8_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/send-email.ts", _page1],
    ["src/pages/api/send-quote.ts", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "38275397-717b-4c8e-81ee-3e3f1d39fd0a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
