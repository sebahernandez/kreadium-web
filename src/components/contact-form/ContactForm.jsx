import { useState } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf();

const contactFormStyles = `
  .contact-input::placeholder {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  .contact-input:focus::placeholder {
    opacity: 0;
  }
`;

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
    planType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, phone, email, message, planType } = formData;
    if (!name || !phone || !email || !message || !planType) {
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
          planType: "",
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
    <div className="container mx-auto max-w-7xl pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24 px-6" id="contact">
      <style>{contactFormStyles}</style>
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
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

      <div className="flex flex-col lg:flex-row gap-12">
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
            <div className="my-5">
              <h3 className="text-2xl font-semibold text-white ">
                Cuéntanos sobre tu proyecto
              </h3>
              <span>Tenemos descuentos exclusivos para <strong>Pymes Sercotec</strong></span>
            </div>

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
                    className="contact-input w-full px-4 py-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CD6C0] focus:border-transparent transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)]"
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
                    placeholder="Ej: 912345678"
                    className="contact-input w-full px-4 py-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CD6C0] focus:border-transparent transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)]"
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
                  className="contact-input w-full px-4 py-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CD6C0] focus:border-transparent transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)]"
                  required
                />
              </div>

              {/* Plan Type Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">
                  ¿Qué tipo de plan te interesa?
                </label>
                <select
                  name="planType"
                  value={formData.planType}
                  onChange={handleChange}
                  className="contact-input w-full px-4 py-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CD6C0] focus:border-transparent transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)] appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                  }}
                  required
                >
                  <option value="" disabled className="bg-gray-900">
                    Selecciona un plan
                  </option>
                  <option value="Landing" className="bg-gray-900">
                    Landing - $150.900/1 vez
                  </option>
                  <option value="Corporativo" className="bg-gray-900">
                    Corporativo - $360.000/1 vez
                  </option>
                  <option value="E-commerce" className="bg-gray-900">
                    E-commerce - $590.000/1 vez
                  </option>
                  <option value="Personalizado" className="bg-gray-900">
                    Personalizado - Sitio avanzado
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">

                  Este campo nos ayudará a entender mejor tus necesidades.
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe tu proyecto, objetivos, presupuesto aproximado y cualquier detalle relevante..."
                  rows="6"
                  className="contact-input w-full px-4 py-4 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4CD6C0] focus:border-transparent transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)] resize-none"
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
