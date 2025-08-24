import { useState } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf();

const itemsServices = [
  {
    id: 1,
    title: "Soporte al cliente.",
    icon: "/icons/check.svg",
  },
  {
    id: 2,
    title: "Soluciones innovadoras y personalizadas.",
    icon: "/icons/check.svg",
  },
  {
    id: 3,
    title: "Equipo con experiencia comprobada.",
    icon: "/icons/check.svg",
  },
  {
    id: 4,
    title: "Tiempo de respuesta rápido.",
    icon: "/icons/check.svg",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, phone, email, message } = formData;
    if (!name || !phone || !email || !message) {
      notyf.error("Todos los campos son obligatorios.");
      return false;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      notyf.error("Por favor, ingresa un email válido.");
      return false;
    }
    if (!/^\d{7,15}$/.test(phone)) {
      notyf.error("Por favor, ingresa un número de teléfono válido.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        notyf.success("¡Mensaje enviado con éxito!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        notyf.error(
          errorData.error || "Ocurrió un error al enviar el mensaje."
        );
      }
    } catch (error) {
      notyf.error("Ocurrió un error al enviar el mensaje.");
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <div className="container mx-auto py-16 px-6" id="contact">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
          ¿Listo para crear algo{" "}
          <span className="bg-gradient-to-r from-[#4CD6C0] to-[#09b397] bg-clip-text text-transparent">
            increíble
          </span>
          ?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Cuéntanos sobre tu proyecto y trabajemos juntos para hacerlo realidad.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* Left Column - Benefits */}
        <div className="lg:w-2/5 space-y-8">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              ¿Por qué elegir Kreadium?
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Porque en <strong className="text-[#4CD6C0]">Kreadium</strong> no
              solo creamos proyectos, sino experiencias que inspiran y conectan.
              Nos enfocamos en comprender tu visión, personalizar cada detalle y
              superar expectativas con soluciones innovadoras.
            </p>
            <ul className="space-y-4">
              {itemsServices.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start space-x-3 text-gray-200"
                >
                  <div className="w-6 h-6 rounded-full bg-[#4CD6C0] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="leading-relaxed">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-3/5">
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Cuéntanos sobre tu proyecto
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 block">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CD6C0] focus:border-transparent transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 block">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    className="w-full px-4 py-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CD6C0] focus:border-transparent transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)]"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CD6C0] focus:border-transparent transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)]"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe tu proyecto, objetivos, presupuesto aproximado y cualquier detalle relevante..."
                  rows="6"
                  className="w-full px-4 py-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CD6C0] focus:border-transparent transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)] resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-[#4CD6C0] to-[#09b397] hover:from-[#09b397] hover:to-[#4CD6C0] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#4CD6C0]/20 focus:outline-none focus:ring-2 focus:ring-[#4CD6C0] focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Enviar mensaje
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-400 text-center mt-4">
                Al enviar este formulario, aceptas que nos contactemos contigo
                para discutir tu proyecto.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
