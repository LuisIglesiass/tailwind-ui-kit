import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ComponentsView from "./components/ComponentsView";


export default function App() {
  const cards = [
    {
      image: "./cleandesign.png",
      title: "Clean Design",
      description: "Beautifully crafted components with modern UI principles.",
    },
    {
      image: "./responsivelayout.png",
      title: "Responsive Layout",
      description: "Looks great on all devices, from mobile to desktop.",
    },
    {
      image: "./modern.png",
      title: "Modern Aesthetics",
      description: "Stay ahead with sleek, visually appealing designs that follow the latest UI trends.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto p-4 space-y-16">
        <Hero />

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Card key={c.title} {...c} delay={i * 120} />
          ))}
        </section>
        <ComponentsView />
      </main>
      <Footer />
    </div>
  );
}