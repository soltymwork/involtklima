export default function ContactPage() {
  return (
    <div className="pt-32 min-h-screen px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-[#1a2b49]">Kontakt</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-[#2196f3] mb-4">Kontaktná osoba</h2>
          <p className="font-semibold text-[#1a2b49] text-lg mb-1">Martin Hlavatý</p>
          <p className="text-gray-600 mb-1">Kozárovce</p>
          <p className="text-gray-600 mb-1">
            Tel.: <a href="tel:+421910954262" className="text-[#2196f3] hover:underline">+421 910 954 262</a>
          </p>
          <p className="text-gray-600 mb-1">
            E-mail: <a href="mailto:involt@involt.sk" className="text-[#2196f3] hover:underline">involt@involt.sk</a>
          </p>
          <p className="text-gray-600">
            E-mail: <a href="mailto:info@involt.sk" className="text-[#2196f3] hover:underline">info@involt.sk</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#2196f3] mb-4">Fakturačné údaje</h2>
          <p className="font-semibold text-[#1a2b49] text-lg mb-1">Involt s. r. o.</p>
          <p className="text-gray-600 mb-1">Kozárovce 763</p>
          <p className="text-gray-600 mb-3">93522 Kozárovce</p>
          <p className="text-gray-600 mb-1">IČO: <span className="font-medium text-[#1a2b49]">56457227</span></p>
          <p className="text-gray-600">DIČ: <span className="font-medium text-[#1a2b49]">2122313644</span></p>
        </div>
      </div>
    </div>
  );
}
