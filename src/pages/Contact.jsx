import Navbar from "../components/Navbar";

export default function Contact() {
	return (
	<main className="min-h-screen bg-secondary">
		<Navbar/>
		<section className="max-w-4xl mx-auto px-6 py-16">
		<h1 className="text-3xl font-bold mb-8">Contact</h1>
  
		<div className="grid gap-8 md:grid-cols-2">
		  <div className="bg-white shadow rounded-xl p-6 border border-gray-100">
			<h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
			<p className="text-gray-600 mb-6">
			  Feel free to reach out if you have any questions, collaboration ideas, or just want to connect.
			</p>
  
			<ul className="space-y-4">
			  <li className="flex items-center gap-3">
				<span className="text-indigo-600">
				  📧
				</span>
				<a
				  href="mailto:lluis.igl3sias@gmail.com"
				  className="text-gray-700 hover:underline"
				>
				  lluis.igl3sias@gmail.com
				</a>
			  </li>
			  <li className="flex items-center gap-3">
				<span className="text-indigo-600">
				  📍
				</span>
				<span className="text-gray-700">Hamburg, DE, Germany</span>
			  </li>
			  <li className="flex items-center gap-3">
				<span className="text-indigo-600">
				  💼
				</span>
				<a
				  href="https://www.linkedin.com/in/luis-iglesias-ab8068243"
				  target="_blank"
				  rel="noopener noreferrer"
				  className="text-gray-700 hover:underline"
				>
				  LinkedIn Profile
				</a>
			  </li>
			</ul>
		  </div>
  
		  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl flex items-center justify-center p-6">
			<img
			  src="/profilepic-profesional.jpeg"
			  alt="Contact Illustration"
			  className="max-w-xs w-full"
			/>
		  </div>
		</div>
	  </section>
	</main>
	);
  }