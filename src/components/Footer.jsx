import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-16 animate-pop">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2025 MyUIkit. All rights reserved.</p>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/LuisIglesiass"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-iglesias-ab8068243"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://portfolio-luisigl3sias.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <FaGlobe size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}