/* empty css                                    */
import { e as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_BveUbbNs.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BlMhdGu1.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect, useMemo } from 'react';
import { a as $$Index, $ as $$Index$1 } from '../chunks/index_CpseJUPH.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const buildKeyframes = (from, steps) => {
  const keys = /* @__PURE__ */ new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s))
  ]);
  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};
const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);
  const defaultFrom = useMemo(
    () => direction === "top" ? { filter: "blur(10px)", opacity: 0, y: -50 } : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );
  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5
      },
      { filter: "blur(0px)", opacity: 1, y: 0 }
    ],
    [direction]
  );
  const fromSnapshot = defaultFrom;
  const toSnapshots = defaultTo;
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from(
    { length: stepCount },
    (_, i) => stepCount === 1 ? 0 : i / (stepCount - 1)
  );
  return /* @__PURE__ */ jsx("p", { ref, className: `blur-text ${className} flex flex-wrap ${className.includes("text-center") ? "justify-center" : ""}`, children: elements.map((segment, index) => {
    const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
    const spanTransition = {
      duration: totalDuration,
      times,
      delay: index * delay / 1e3
    };
    spanTransition.ease = easing;
    return /* @__PURE__ */ jsxs(
      motion.span,
      {
        className: "inline-block will-change-[transform,filter,opacity]",
        initial: fromSnapshot,
        animate: inView ? animateKeyframes : fromSnapshot,
        transition: spanTransition,
        onAnimationComplete: index === elements.length - 1 ? onAnimationComplete : void 0,
        children: [
          segment === " " ? " " : segment,
          animateBy === "words" && index < elements.length - 1 && " "
        ]
      },
      index
    );
  }) });
};

const $$Integrations = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative py-20 md:py-28 overflow-hidden" id="integraciones"> <!-- Efectos de fondo divisorios responsivos --> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(76,214,192,0.08)] to-transparent"></div> <div class="absolute top-16 left-8 md:top-32 md:left-16 w-16 h-16 md:w-32 md:h-32 bg-[#4CD6C0] opacity-[0.15] rounded-full blur-[50px] md:blur-[100px]"></div> <div class="absolute bottom-16 right-8 md:bottom-32 md:right-16 w-20 h-20 md:w-40 md:h-40 bg-[#09b397] opacity-[0.10] rounded-full blur-[60px] md:blur-[100px]"></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-[#4CD6C0] opacity-[0.05] rounded-full blur-[60px] md:blur-[120px]"></div> <div class="container mx-auto max-w-7xl px-6 relative z-10"> <div class="max-w-3xl mx-auto text-center mb-20 md:mb-28"> <h2 class="font-geist text-2xl md:text-3xl font-bold tracking-[-0.025em] mb-8 uppercase text-center"> ${renderComponent($$result, "BlurText", BlurText, { "text": "Integraciones de pasarelas de pago", "delay": 150, "animateBy": "words", "direction": "top", "className": "inline", "onAnimationComplete": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/blur-text/BlurText", "client:component-export": "default" })} </h2> <p class="text-gray-300 text-lg">
Conectamos tu tienda con las principales pasarelas de pago para ofrecerte máxima flexibilidad y conversión en tus ventas online.
</p> </div> <!-- Grid de pasarelas de pago --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> <!-- Venti --> <div class="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-105"> <div class="w-32 h-20 mx-auto mb-4 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center p-4"> <img src="/icons/venti.svg" alt="Venti" class="w-full h-full object-contain" width="128" height="80" loading="lazy" decoding="async"> </div> <p class="text-gray-400 text-sm mb-4">Pasarela de pagos chilena con múltiples opciones de pago y fácil integración.</p> <div class="text-xs text-[#4CD6C0] font-medium">✓ Tarjetas de crédito y débito</div> <div class="text-xs text-[#4CD6C0] font-medium">✓ Transferencias bancarias</div> </div> <!-- Mercado Pago --> <div class="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-105"> <div class="w-32 h-20 mx-auto mb-4 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center p-4"> <img src="/icons/mercado-pago.svg" alt="Mercado Pago" class="w-full h-full object-contain" width="128" height="80" loading="lazy" decoding="async"> </div> <p class="text-gray-400 text-sm mb-4">La pasarela líder en Latinoamérica con máxima confianza y reconocimiento.</p> <div class="text-xs text-[#4CD6C0] font-medium">✓ Pagos en cuotas</div> <div class="text-xs text-[#4CD6C0] font-medium">✓ Punto de venta</div> </div> <!-- Flow --> <div class="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-105"> <div class="w-32 h-20 mx-auto mb-4 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center p-4"> <img src="/icons/flow.svg" alt="Flow" class="w-full h-full object-contain" width="128" height="80" loading="lazy" decoding="async"> </div> <p class="text-gray-400 text-sm mb-4">Plataforma de pagos chilena con altos estándares de seguridad y facilidad de uso.</p> <div class="text-xs text-[#4CD6C0] font-medium">✓ Webpay Plus</div> <div class="text-xs text-[#4CD6C0] font-medium">✓ Klarna</div> </div> <!-- Finctoc --> <div class="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-105"> <div class="w-32 h-20 mx-auto mb-4 rounded-lg bg-[rgba(76,214,192,0.1)] flex items-center justify-center p-4"> <img src="/icons/fintoc.svg" alt="Fintoc" class="w-full h-full object-contain" width="128" height="80" loading="lazy" decoding="async"> </div> <p class="text-gray-400 text-sm mb-4">Solución de pagos moderna con tecnología avanzada y excelente experiencia de usuario.</p> <div class="text-xs text-[#4CD6C0] font-medium">✓ API moderna</div> <div class="text-xs text-[#4CD6C0] font-medium">✓ Pagos recurrentes</div> </div> </div> </div> </section>`;
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/components/Integrations.astro", void 0);

const $$Integraciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Integraciones de Pago | Kreadium - Flow, Mercado Pago, Webpay", "description": "Integramos pasarelas de pago en Chile: Flow, Mercado Pago, Webpay, Fintoc. Checkout seguro, m\xFAltiples m\xE9todos de pago y comisiones competitivas.", "ogTitle": "Integraciones de Pago | Kreadium - Flow, Mercado Pago, Webpay", "ogDescription": "Integramos pasarelas de pago en Chile: Flow, Mercado Pago, Webpay, Fintoc. Checkout seguro, m\xFAltiples m\xE9todos de pago y comisiones competitivas.", "canonical": "/integraciones", "data-astro-cid-td2y7sta": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section id="integraciones" class="page-hero scroll-mt-20 md:scroll-mt-24" data-astro-cid-td2y7sta><div class="container mx-auto max-w-7xl px-6 text-center relative z-10" data-astro-cid-td2y7sta><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style="background: rgba(76, 214, 192, 0.1); border: 1px solid rgba(76, 214, 192, 0.2); color: rgba(76, 214, 192, 0.9);" data-astro-cid-td2y7sta>
Integraciones
</div><h1 class="font-geist text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-[-0.03em] text-white" data-astro-cid-td2y7sta>
Pasarelas de pago<br data-astro-cid-td2y7sta><span class="gradient-text italic" data-astro-cid-td2y7sta>conectadas y listas</span></h1><p class="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto" data-astro-cid-td2y7sta>
Conectamos tu tienda con las principales plataformas de pago en Chile y Latinoamérica.
</p></div></section><div class="section-divider-gradient" data-astro-cid-td2y7sta></div>${renderComponent($$result2, "Integrations", $$Integrations, { "data-astro-cid-td2y7sta": true })}<div class="section-divider-border" data-astro-cid-td2y7sta></div><section id="beneficios" class="relative py-20 md:py-28 scroll-mt-20 md:scroll-mt-24" data-astro-cid-td2y7sta><div class="container mx-auto max-w-7xl px-6" data-astro-cid-td2y7sta><div class="text-center mb-16" data-astro-cid-td2y7sta><h2 class="font-geist text-3xl md:text-5xl font-bold text-white mb-6 tracking-[-0.025em] leading-[1.1]" data-astro-cid-td2y7sta>
Beneficios de <span class="italic" data-astro-cid-td2y7sta>Nuestras Integraciones</span></h2><p class="text-lg text-gray-400 max-w-2xl mx-auto" data-astro-cid-td2y7sta>
Soluciones de pago seguras, rápidas y adaptadas al mercado chileno
</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-td2y7sta><!-- Benefit 1 --><div class="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-all" data-astro-cid-td2y7sta><div class="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-[#4CD6C0]/20 to-transparent" data-astro-cid-td2y7sta><svg class="w-6 h-6 text-[#4CD6C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-td2y7sta><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-astro-cid-td2y7sta></path></svg></div><h3 class="text-xl font-semibold text-white mb-3" data-astro-cid-td2y7sta>Pagos Seguros</h3><p class="text-gray-400 leading-relaxed" data-astro-cid-td2y7sta>
Todas las transacciones están protegidas con certificados SSL y cumplen con estándares PCI DSS
</p></div><!-- Benefit 2 --><div class="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-all" data-astro-cid-td2y7sta><div class="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-[#4CD6C0]/20 to-transparent" data-astro-cid-td2y7sta><svg class="w-6 h-6 text-[#4CD6C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-td2y7sta><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-td2y7sta></path></svg></div><h3 class="text-xl font-semibold text-white mb-3" data-astro-cid-td2y7sta>Procesamiento Rápido</h3><p class="text-gray-400 leading-relaxed" data-astro-cid-td2y7sta>
Confirmaciones instantáneas y acreditación automática para una mejor experiencia de usuario
</p></div><!-- Benefit 3 --><div class="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-all" data-astro-cid-td2y7sta><div class="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-[#4CD6C0]/20 to-transparent" data-astro-cid-td2y7sta><svg class="w-6 h-6 text-[#4CD6C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-td2y7sta><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" data-astro-cid-td2y7sta></path></svg></div><h3 class="text-xl font-semibold text-white mb-3" data-astro-cid-td2y7sta>Múltiples Métodos</h3><p class="text-gray-400 leading-relaxed" data-astro-cid-td2y7sta>
Tarjetas de crédito, débito, transferencias y medios de pago alternativos
</p></div><!-- Benefit 4 --><div class="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-all" data-astro-cid-td2y7sta><div class="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-[#4CD6C0]/20 to-transparent" data-astro-cid-td2y7sta><svg class="w-6 h-6 text-[#4CD6C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-td2y7sta><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-td2y7sta></path></svg></div><h3 class="text-xl font-semibold text-white mb-3" data-astro-cid-td2y7sta>Protección Antifraude</h3><p class="text-gray-400 leading-relaxed" data-astro-cid-td2y7sta>
Sistemas avanzados de detección de fraude y verificación de transacciones
</p></div><!-- Benefit 5 --><div class="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-all" data-astro-cid-td2y7sta><div class="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-[#4CD6C0]/20 to-transparent" data-astro-cid-td2y7sta><svg class="w-6 h-6 text-[#4CD6C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-td2y7sta><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-astro-cid-td2y7sta></path></svg></div><h3 class="text-xl font-semibold text-white mb-3" data-astro-cid-td2y7sta>Reportes Detallados</h3><p class="text-gray-400 leading-relaxed" data-astro-cid-td2y7sta>
Dashboards con métricas de ventas, conciliación automática y reportería completa
</p></div><!-- Benefit 6 --><div class="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-all" data-astro-cid-td2y7sta><div class="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-[#4CD6C0]/20 to-transparent" data-astro-cid-td2y7sta><svg class="w-6 h-6 text-[#4CD6C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-td2y7sta><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-td2y7sta></path></svg></div><h3 class="text-xl font-semibold text-white mb-3" data-astro-cid-td2y7sta>Comisiones Competitivas</h3><p class="text-gray-400 leading-relaxed" data-astro-cid-td2y7sta>
Negociamos las mejores tarifas con las pasarelas para maximizar tu rentabilidad
</p></div></div></div></section><div class="section-divider-border" data-astro-cid-td2y7sta></div><section id="cta-integraciones" class="relative py-20 md:py-28 scroll-mt-20 md:scroll-mt-24" data-astro-cid-td2y7sta><div class="container mx-auto max-w-4xl px-6 text-center" data-astro-cid-td2y7sta><div class="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent" data-astro-cid-td2y7sta><h2 class="font-geist text-3xl md:text-4xl font-semibold text-white mb-4 tracking-[-0.025em]" data-astro-cid-td2y7sta>
¿Necesitas <span class="italic" data-astro-cid-td2y7sta>integrar pagos</span> en tu sitio?
</h2><p class="text-gray-400 mb-8 text-lg" data-astro-cid-td2y7sta>
Implementamos la pasarela de pago ideal para tu negocio
</p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-td2y7sta><a href="/contacto" class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-white text-black hover:bg-gray-100 transition-colors" data-astro-cid-td2y7sta>
Solicitar Integración
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-td2y7sta><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-td2y7sta></path></svg></a><a href="/precios" class="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-white/[0.1] text-white hover:bg-white/[0.05] transition-colors" data-astro-cid-td2y7sta>
Ver Precios
</a></div></div></div></section>${renderComponent($$result2, "SpeedInsights", $$Index, { "data-astro-cid-td2y7sta": true })}${renderComponent($$result2, "Analytics", $$Index$1, { "data-astro-cid-td2y7sta": true })}` })}`;
}, "/Users/sebacure/Desktop/proyectos/kreadium-web/src/pages/integraciones.astro", void 0);

const $$file = "/Users/sebacure/Desktop/proyectos/kreadium-web/src/pages/integraciones.astro";
const $$url = "/integraciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Integraciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
