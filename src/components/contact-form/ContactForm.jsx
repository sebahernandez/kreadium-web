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
    <div
      className="container mx-auto flex flex-col md:flex-row gap-8 text-white py-10 bg-box px-5 my-10 rounded-lg"
      id="contact"
    >
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          ¿Por qué elegir Kreadium?
        </h2>
        <p className="text-gray-400">
          Porque en <strong className="text-white">Kreadium</strong> no solo
          creamos proyectos, sino experiencias que inspiran y conectan. Nos
          enfocamos en comprender tu visión, personalizar cada detalle y superar
          expectativas con soluciones innovadoras. Nuestra pasión por el diseño
          y la creatividad nos impulsa a entregar resultados que marcan la
          diferencia.{" "}
          <strong className="text-white">
            ¡Haz que tu proyecto brille con nosotros!
          </strong>
        </p>
        <ul className="space-y-3">
          {itemsServices.map((item) => (
            <li
              key={item.id}
              className="flex items-center space-x-2 text-lg text-gray-200"
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-6 h-6"
              />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4 rounded-lg">
        <h3 className="text-xl">Si necesitas más información, escríbenos</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full p-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          className="w-full p-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensaje"
          className="w-full p-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-lg text-black font-bold"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
