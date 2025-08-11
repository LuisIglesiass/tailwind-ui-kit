import Navbar from "../components/Navbar";

export default function About() {
	return (
	  <main className="min-h-screen bg-secondary">
		<Navbar/>
		<section className="max-w-5xl mx-auto px-4 py-16">
		  <header className="mb-12 text-center">
			<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
			  About <span className="text-primary">Luis Iglesias</span>
			</h1>
			<p className="mt-3 text-gray-600 max-w-2xl mx-auto">
			  Passionate Web Developer. I build responsive, accessible and high‑performance web apps
			  with modern technologies. I enjoy turning complex challenges into clean, user‑friendly solutions.
			</p>
		  </header>
  
		  {/* Hero: text + photo */}
		  <div className="grid md:grid-cols-2 gap-8 items-center">
			<div className="space-y-6">
			  <div className="rounded-2xl bg-white/80 backdrop-blur shadow p-6 border border-indigo-50">
				<h2 className="text-xl font-semibold text-gray-900">What I do</h2>
				<p className="mt-2 text-gray-700">
				  I stay curious and up to date with the latest tools to build for the modern web.
				  Clean code, solid patterns, and small, frequent deliveries.
				</p>
  
				<div className="mt-5 flex flex-wrap gap-3">
				  <a
					href="mailto:lluis.igl3sias@gmail.com"
					className="px-4 py-2 rounded-lg border border-indigo-200 text-primary hover:bg-indigo-50 transition"
				  >
					Get in touch
				  </a>
				  <a
					href="/Lebenslauf.pdf"
					target="_blank"
					rel="noreferrer"
					className="px-4 py-2 rounded-lg border border-indigo-200 text-primary hover:bg-indigo-50 transition"
				  >
					Download CV
				  </a>
				</div>
			  </div>
  
				<div className="flex flex-wrap gap-2">
				{[
					"React",
					"Next.js",
					"TypeScript",
					"Tailwind CSS",
					"JavaScript",
					"Express",
					"MongoDB",
					"Git/GitHub",
					"Figma",
				].map((tag) => (
					<span
					key={tag}
					className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100"
					>
					{tag}
					</span>
				))}
				</div>
			</div>
  
			<div className="relative">
			  <div className="rounded-3xl bg-white shadow-lg border border-indigo-50 p-3">
				<div className="rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
				  <img
					src="/github-picture.png"
					alt="Pixel portrait of Luis Iglesias"
					className="w-full h-auto object-cover [image-rendering:pixelated]"
				  />
				</div>
			  </div>
  
			  <div className="pointer-events-none absolute -inset-4 -z-10 bg-indigo-200/30 blur-3xl rounded-3xl" />
			</div>
		  </div>
  
		  <div className="mt-12 grid md:grid-cols-3 gap-6">
			<article className="rounded-2xl bg-white shadow p-6 border border-gray-100">
			  <div className="text-2xl">🧩</div>
			  <h3 className="mt-2 font-semibold text-gray-900">Web Development</h3>
			  <p className="mt-2 text-sm text-gray-700">
				Responsive and performant apps with <strong>React</strong>, <strong>Next.js</strong> and experience in <strong>Angular</strong>.
				Focused on clean code and modern best practices.
			  </p>
			</article>
  
			<article className="rounded-2xl bg-white shadow p-6 border border-gray-100">
			  <div className="text-2xl">🎨</div>
			  <h3 className="mt-2 font-semibold text-gray-900">UI / UX Design</h3>
			  <p className="mt-2 text-sm text-gray-700">
				Intuitive, accessible interfaces. I collaborate closely to align design systems,
				components, and real user needs.
			  </p>
			</article>
  
			<article className="rounded-2xl bg-white shadow p-6 border border-gray-100">
			  <div className="text-2xl">🚀</div>
			  <h3 className="mt-2 font-semibold text-gray-900">Project Management</h3>
			  <p className="mt-2 text-sm text-gray-700">
				Agile teamwork from planning to delivery. Comfortable with Git/Bitbucket and
				cross‑functional collaboration.
			  </p>
			</article>
		  </div>
  
		  <div className="mt-12 text-center text-sm text-gray-500">
			Based in Hamburg, DE • Open to remote or hybrid opportunities
		  </div>
		</section>
	  </main>
	);
  }