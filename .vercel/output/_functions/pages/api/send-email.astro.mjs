import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const API_KEY = "re_DNdvnh8M_D9AuRPTbqAXZrQ9NAv12S9tY";
const resend = new Resend(API_KEY) ;
const POST = async ({ request }) => {
  try {
    if (!resend) {
      console.error("Resend not configured - missing API key");
      return new Response(
        JSON.stringify({
          error: "Email service not configured."
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    const data = await request.json();
    const {
      name,
      email,
      phone,
      company,
      message,
      proposito,
      identidad,
      soporte,
      tiempo
    } = data;
    if (!name || !email || !proposito || !identidad || !soporte || !tiempo) {
      return new Response(
        JSON.stringify({
          error: "Todos los campos obligatorios deben estar completos."
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { data: emailData, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "contacto@kreadium.cl",
      // Cambiar por el email real
      subject: `📩 Nueva solicitud de cotización de ${name}`,
      html: `
        <h2>📌 Nueva solicitud de cotización desde el sitio web</h2>
        <h3>¿Cuál es el propósito principal de tu sitio web?</h3>
        <p>${proposito}</p>

        <h3>¿Tienes algún diseño o identidad visual definida?</h3>
        <p>${identidad}</p>

        <h3>¿Necesitas soporte o mantenimiento después del lanzamiento?</h3>
        <p>${soporte}</p>

        <h3>¿En qué plazo necesitas tu sitio web?</h3>
        <p>${tiempo}</p>

        <hr>
        <h2>📞 Datos de Contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Empresa:</strong> ${company || "No proporcionado"}</p>

        <h3>📩 Mensaje adicional:</h3>
        <p>${message || "Sin comentarios adicionales"}</p>
      `
    });
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ success: true, data: emailData }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error interno del servidor:", error);
    const errorMessage = error instanceof Error ? error.message : "Error interno del servidor";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
