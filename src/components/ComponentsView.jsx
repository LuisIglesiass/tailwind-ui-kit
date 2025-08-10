import { useState, useEffect } from "react";

function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // Silently ignore clipboard errors
    }
  };

  return (
    <button
      onClick={onCopy}
      className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded-md hover:bg-gray-500 transition-all duration-300 ease-in-out hover:cursor-pointer"
    >
      {copied ? "Copied!" : "Copy code"}
    </button>
  );
}

function ComponentCard({ title, preview, code }) {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100">
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <CopyButton code={code} />
      </header>

      <div className="p-5">
        {/* Preview */}
        <div className="bg-gray-50 rounded-lg p-5 grid place-items-center min-h-28">
          {preview}
        </div>

        {/* Code */}
        <pre className="mt-4 text-xs bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </article>
  );
}

export default function ComponentsView() {
  // Modal demo state
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* --- Snippets (previews + code strings) --- */

  const primaryBtn = (
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
      Primary Button
    </button>
  );
  const primaryBtnCode = `<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
  Primary Button
</button>`;

  const secondaryBtn = (
    <button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition">
      Secondary Button
    </button>
  );
  const secondaryBtnCode = `<button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition">
  Secondary Button
</button>`;

  const ghostBtn = (
    <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition">
      Ghost Button
    </button>
  );
  const ghostBtnCode = `<button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition">
  Ghost Button
</button>`;

  const badges = (
    <div className="flex gap-2 flex-wrap">
      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Success</span>
      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">Warning</span>
      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700">Info</span>
      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New</span>
    </div>
  );
  const badgesCode = `<div className="flex gap-2 flex-wrap">
  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Success</span>
  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">Warning</span>
  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700">Info</span>
  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New</span>
</div>`;

  const inputField = (
    <label className="block text-left w-full max-w-sm">
      <span className="text-sm text-gray-700">Email</span>
      <input
        type="email"
        placeholder="you@example.com"
        className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition"
      />
    </label>
  );
  const inputFieldCode = `<label className="block text-left w-full max-w-sm">
  <span className="text-sm text-gray-700">Email</span>
  <input
    type="email"
    placeholder="you@example.com"
    className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition"
  />
</label>`;

  const cardPreview = (
    <div className="bg-white rounded-xl shadow overflow-hidden w-full max-w-sm">
      <img
        src="https://picsum.photos/seed/preview-card/800/600"
        alt="Card"
        className="w-full h-40 object-cover"
        onError={(e)=>{ e.currentTarget.src="https://placehold.co/800x600/edf2ff/3730a3?text=Card"; }}
      />
      <div className="p-4">
        <h4 className="font-semibold text-gray-900">Card Title</h4>
        <p className="text-sm text-gray-600 mt-1">Card description goes here.</p>
      </div>
    </div>
  );
  const cardCode = `<div className="bg-white rounded-xl shadow overflow-hidden w-full max-w-sm">
  <img src="https://picsum.photos/seed/preview-card/800/600" alt="Card" className="w-full h-40 object-cover" />
  <div className="p-4">
    <h4 className="font-semibold text-gray-900">Card Title</h4>
    <p className="text-sm text-gray-600 mt-1">Card description goes here.</p>
  </div>
</div>`;

const modalPreview = (
    <button
      onClick={() => setOpen(true)}
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
    >
      Open Modal
    </button>
  );
  const modalCode = `// Trigger
<button
  onClick={() => setOpen(true)}
  className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
>
  Open Modal
</button>

// Modal (React)
{open && (
  <div aria-modal="true" role="dialog" className="fixed inset-0 z-50 grid place-items-center" onClick={() => setOpen(false)}>
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 w-full max-w-md mx-4 rounded-xl bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
      <h4 className="text-lg font-semibold mb-2">Reusable Modal</h4>
      <p className="text-gray-600 mb-6">This lightweight modal uses Tailwind utilities and state toggle.</p>
      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition" onClick={() => setOpen(false)}>Cancel</button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition" onClick={() => setOpen(false)}>Confirm</button>
      </div>
    </div>
  </div>
)}`;

const alertPreview = (
	<div className="w-full max-w-lg space-y-2">
	  <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-green-800">
		<span className="text-lg">✓</span>
		<p className="text-sm">Success — Your changes were saved.</p>
	  </div>
	  <div className="flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-4 py-2 text-sky-800">
		<span className="text-lg">ℹ️</span>
		<p className="text-sm">Info — Heads up, something to note.</p>
	  </div>
	  <div className="flex items-center gap-2 rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-2 text-yellow-800">
		<span className="text-lg">⚠️</span>
		<p className="text-sm">Warning — Please check your input.</p>
	  </div>
	  <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-red-800">
		<span className="text-lg">⛔</span>
		<p className="text-sm">Error — Something went wrong.</p>
	  </div>
	</div>
  );
  const alertCode = `<div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-green-800">
	<span className="text-lg">✓</span>
	<p className="text-sm">Success — Your changes were saved.</p>
  </div>`;

  const tooltipPreview = (
	<div className="flex gap-6">
	  <div className="relative group">
		<button className="px-3 py-2 rounded-md bg-gray-900 text-white">Hover me</button>
		<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[115%] whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
		  Simple tooltip
		</div>
	  </div>
	  <div className="relative group">
		<button className="px-3 py-2 rounded-md border border-gray-300">Hover me</button>
		<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 translate-y-[-100%] whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
		  Tooltip on top
		</div>
	  </div>
	</div>
  );
  const tooltipCode = `<div className="relative group">
	<button className="px-3 py-2 rounded-md bg-gray-900 text-white">Hover me</button>
	<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[115%] whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
	  Simple tooltip
	</div>
  </div>`;

  const dropdownPreview = (
	<div className="relative">
	  <details className="group">
		<summary className="list-none select-none px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer">
		  Menu ▾
		</summary>
		<div className="absolute z-10 mt-2 w-40 rounded-lg border border-gray-100 bg-white p-1 shadow">
		  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50">Profile</button>
		  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50">Settings</button>
		  <button className="w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-red-50">Logout</button>
		</div>
	  </details>
	</div>
  );
  const dropdownCode = `<details className="relative group">
	<summary className="list-none select-none px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer">
	  Menu ▾
	</summary>
	<div className="absolute z-10 mt-2 w-40 rounded-lg border border-gray-100 bg-white p-1 shadow">
	  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50">Profile</button>
	  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50">Settings</button>
	  <button className="w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-red-50">Logout</button>
	</div>
  </details>`;

  const paginationPreview = (
	<div className="flex items-center gap-2">
	  <button className="px-3 py-1.5 rounded-md border hover:bg-gray-50">Prev</button>
	  <button className="px-3 py-1.5 rounded-md border bg-indigo-600 text-white">1</button>
	  <button className="px-3 py-1.5 rounded-md border hover:bg-gray-50">2</button>
	  <button className="px-3 py-1.5 rounded-md border hover:bg-gray-50">3</button>
	  <button className="px-3 py-1.5 rounded-md border hover:bg-gray-50">Next</button>
	</div>
  );
  const paginationCode = `<div className="flex items-center gap-2">
	<button className="px-3 py-1.5 rounded-md border hover:bg-gray-50">Prev</button>
	<button className="px-3 py-1.5 rounded-md border bg-indigo-600 text-white">1</button>
	<button className="px-3 py-1.5 rounded-md border hover:bg-gray-50">2</button>
	<button className="px-3 py-1.5 rounded-md border hover:bg-gray-50">3</button>
	<button className="px-3 py-1.5 rounded-md border hover:bg-gray-50">Next</button>
  </div>`;

  const skeletonPreview = (
	<div className="w-full max-w-sm rounded-xl border border-gray-100 bg-white overflow-hidden">
	  <div className="h-40 bg-gray-100 animate-pulse" />
	  <div className="p-4 space-y-2">
		<div className="h-4 bg-gray-100 rounded animate-pulse" />
		<div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
	  </div>
	</div>
  );
  const skeletonCode = `<div className="w-full max-w-sm rounded-xl border border-gray-100 bg-white overflow-hidden">
	<div className="h-40 bg-gray-100 animate-pulse" />
	<div className="p-4 space-y-2">
	  <div className="h-4 bg-gray-100 rounded animate-pulse" />
	  <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
	</div>
  </div>`;

  const statsPreview = (
	<div className="grid grid-cols-2 gap-4 w-full max-w-lg">
	  <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
		<p className="text-sm text-gray-500">Users</p>
		<p className="text-2xl font-bold">12,340</p>
		<p className="text-xs text-green-600 mt-1">+4.2% this week</p>
	  </div>
	  <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
		<p className="text-sm text-gray-500">Revenue</p>
		<p className="text-2xl font-bold">$8,920</p>
		<p className="text-xs text-green-600 mt-1">+2.3% this week</p>
	  </div>
	</div>
  );
  const statsCode = `<div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
	<p className="text-sm text-gray-500">Users</p>
	<p className="text-2xl font-bold">12,340</p>
	<p className="text-xs text-green-600 mt-1">+4.2% this week</p>
  </div>`;

  return (
    <section id="components" className="space-y-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold">Components Preview</h2>
        <p className="text-sm text-gray-500">Click “Copy code” to reuse each component.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ComponentCard title="Button – Primary"   preview={primaryBtn}   code={primaryBtnCode} />
        <ComponentCard title="Button – Secondary" preview={secondaryBtn} code={secondaryBtnCode} />
        <ComponentCard title="Button – Ghost"     preview={ghostBtn}     code={ghostBtnCode} />
        <ComponentCard title="Badges"             preview={badges}       code={badgesCode} />
        <ComponentCard title="Input + Label"      preview={inputField}   code={inputFieldCode} />
        <ComponentCard title="Card"               preview={cardPreview}  code={cardCode} />
        <ComponentCard title="Modal (trigger)"    preview={modalPreview} code={modalCode} />
        <ComponentCard title="Alert / Banner"    preview={alertPreview} code={alertCode} />
        <ComponentCard title="Tooltip"    preview={tooltipPreview} code={tooltipCode} />
        <ComponentCard title="Dropdown"    preview={dropdownPreview} code={dropdownCode} />
        <ComponentCard title="Pagination"    preview={paginationPreview} code={paginationCode} />
        <ComponentCard title="Skeleton Loader (card)"    preview={skeletonPreview} code={skeletonCode} />
        <ComponentCard title="KPI / Stats"    preview={statsPreview} code={statsCode} />
      </div>

      {open && (
        <div aria-modal="true" role="dialog" className="fixed inset-0 z-50 grid place-items-center" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 w-full max-w-md mx-4 rounded-xl bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-lg font-semibold mb-2">Reusable Modal</h4>
            <p className="text-gray-600 mb-6">This lightweight modal uses Tailwind utilities and a simple state toggle.</p>
            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition" onClick={() => setOpen(false)}>Cancel</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition" onClick={() => setOpen(false)}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}