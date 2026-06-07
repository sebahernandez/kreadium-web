import 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
{
  console.error("RESEND_API_KEY is not configured");
}
const resend = null;
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
    const { name, email, phone, message, planType } = data;
    if (!name || !email || !phone || !message || !planType) {
      return new Response(
        JSON.stringify({
          error: "Todos los campos (name, email, phone, message, planType) son obligatorios."
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
      subject: `(Sitio web) Nuevo mensaje de contacto de ${name} - Plan: ${planType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #4CD6C0; margin-bottom: 20px; border-bottom: 2px solid #4CD6C0; padding-bottom: 10px;">
              Nuevo mensaje de contacto - Sitio web
            </h2>

            <div style="margin-bottom: 15px;">
              <strong style="color: #333; display: inline-block; width: 140px;">Nombre:</strong>
              <span style="color: #555;">${name}</span>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #333; display: inline-block; width: 140px;">Email:</strong>
              <span style="color: #555;">${email}</span>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #333; display: inline-block; width: 140px;">Teléfono:</strong>
              <span style="color: #555;">${phone}</span>
            </div>

            <div style="margin-bottom: 20px; background-color: #e8f9f6; padding: 15px; border-radius: 8px; border-left: 4px solid #4CD6C0;">
              <strong style="color: #4CD6C0; display: block; margin-bottom: 5px;">Plan de interés:</strong>
              <span style="color: #333; font-size: 16px; font-weight: 600;">${planType}</span>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <strong style="color: #333; display: block; margin-bottom: 10px;">Mensaje:</strong>
              <p style="color: #555; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de kreadium.cl</p>
          </div>
        </div>
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
