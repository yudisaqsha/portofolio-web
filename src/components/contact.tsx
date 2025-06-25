import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="my-12 text-center">
      <h1 className="text-white text-4xl mb-8">Contact Me</h1>
      <div className="flex flex-row justify-center gap-4 w-screen">
        <a
          href="https://wa.me/6282358790232"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-white hover:text-green-400 transition"
        >
          <FaWhatsapp size={20} />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://github.com/yudisaqsha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-white hover:text-gray-300 transition"
        >
          <FaGithub size={20} />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/yudisaqsha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-white hover:text-blue-400 transition"
        >
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:yudis.m.aqsha@gmail.com"
          className="flex items-center justify-center gap-3 text-white hover:text-red-400 transition"
        >
          <FaEnvelope size={20} />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}
