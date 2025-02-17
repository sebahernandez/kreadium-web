import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend(undefined                              );
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({
          error: "Todos los campos (name, email, phone, message) son obligatorios."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const { data: emailData, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "contacto@kreadium.cl",
      // cambiar por el email de la empresa
      subject: `(Sitio web) Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto sitio web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
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
    console.error("Error interno:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
