import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-white shadow-sm sticky top-0 z-10">
			<div className="max-w-7xl mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					<div className="text-xl font-bold text-indigo-600">MyUIkit</div>
					
					{/* Desktop Menu */}
					<div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
						<a href="/" className="hover:text-indigo-600 transition">Home</a>
						<a href="/about" className="hover:text-indigo-600 transition">About</a>
						<a href="/contact" className="hover:text-indigo-600 transition">Contact</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition"
						aria-label="Toggle menu"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{isMenuOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden mt-3 pb-3 border-t border-gray-200">
						<div className="flex flex-col gap-3 pt-3">
							<a 
								href="/" 
								className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition px-2 py-1 rounded hover:bg-gray-50"
								onClick={() => setIsMenuOpen(false)}
							>
								Home
							</a>
							<a 
								href="/about" 
								className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition px-2 py-1 rounded hover:bg-gray-50"
								onClick={() => setIsMenuOpen(false)}
							>
								About
							</a>
							<a 
								href="/contact" 
								className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition px-2 py-1 rounded hover:bg-gray-50"
								onClick={() => setIsMenuOpen(false)}
							>
								Contact
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}