import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const API_KEY = import.meta.env.RESEND_API_KEY;

if (!API_KEY) {
  console.error("RESEND_API_KEY is not configured");
}

const resend = API_KEY ? new Resend(API_KEY) : null;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Verificar que Resend esté configurado
    if (!resend) {
      console.error("Resend not configured - missing API key");
      return new Response(
        JSON.stringify({
          error: "Email service not configured.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Parsear datos del formulario
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Validar los campos del formulario
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({
          error:
            "Todos los campos (name, email, phone, message) son obligatorios.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Enviar el correo utilizando Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "contacto@kreadium.cl", // cambiar por el email de la empresa
      subject: `(Sitio web) Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto sitio web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    // Manejo de errores de Resend
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Respuesta exitosa
    return new Response(JSON.stringify({ success: true, data: emailData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Manejo de errores generales
    console.error("Error interno:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Error interno del servidor";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
