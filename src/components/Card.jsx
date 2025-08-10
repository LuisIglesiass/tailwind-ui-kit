const FALLBACK = "https://placehold.co/800x600/edf2ff/3730a3?text=UI+Kit";

export default function Card({ image, title, description, delay = 0 }) {
  return (
    <article
      className="bg-white rounded-l shadow hover:shadow-lg transition overflow-hidden opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        onError={(e) => { e.currentTarget.src = FALLBACK; }}
        className="w-full h-auto object-contain"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </article>
  );
}