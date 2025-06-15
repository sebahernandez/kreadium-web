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
    const {
      name,
      email,
      phone,
      company,
      message,
      proposito,
      identidad,
      soporte,
      tiempo,
    } = data;

    // Validar los campos obligatorios
    if (!name || !email || !proposito || !identidad || !soporte || !tiempo) {
      return new Response(
        JSON.stringify({
          error: "Todos los campos obligatorios deben estar completos.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Enviar el correo con Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "contacto@kreadium.cl", // Cambiar por el email real
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
    console.error("Error interno del servidor:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Error interno del servidor";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
