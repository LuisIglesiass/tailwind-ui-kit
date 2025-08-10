export default function Hero() {
	return (
	  <section className="text-center py-16 sm:py-20 bg-gradient-to-b from-indigo-50 to-white rounded-xl shadow-sm animate-fade-up">
		<div className="max-w-3xl mx-auto px-4">
		  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
			Build Modern Interfaces with <span className="text-indigo-600">Tailwind</span>
		  </h1>
		  <p className="text-lg text-gray-600 mb-8">
			A clean and responsive UI kit to showcase your design and development skills.
		  </p>
		  <button
			onClick={() => document.getElementById("components")?.scrollIntoView({ behavior: "smooth" })}
			className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:-translate-y-0.5 hover:shadow-md transition duration-300"
			>
			Get Started
		  </button>
		</div>
	  </section>
	);
  }