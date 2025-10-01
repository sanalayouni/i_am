import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

function CompanyCard() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[600px] relative">
        
        {/* Logo */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl shadow-md">
            {"</>"}
          </div>
        </div>

        {/* Company Header */}
        <div className="text-center mt-14">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            Tagmanya 
            <span className="text-blue-500">✔</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Agence digitale depuis 2008 <br /> sites, design, réseaux sociaux
          </p>
        </div>

        {/* About */}
        <div className="mt-6">
          <h3 className="text-blue-500 mr-86  font-semibold">À propos</h3>
          <p className="text-gray-600 text-sm mt-1">
            We offer a wide range of services, including web design, web
            development, graphic design, content writing, website audit and
            optimization, analytics, and more.
          </p>
        </div>

        {/* Legal Info */}
        <div className="mt-6">
          <h3 className="text-blue-500 mr-86 font-semibold">Informations légales</h3>
          <div className="grid grid-cols-2 text-sm text-gray-700 mt-2">
            <p><span className="font-semibold">RNE</span> 12345678</p>
            <p><span className="font-semibold">Director</span> Yessine Bohlel</p>
            <p><span className="font-semibold">VAT Number</span> MA123456789</p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">Bank Details (RIB)</span> 
              <FaDownload className="text-blue-500 cursor-pointer" />
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6">
          <h3 className="text-blue-500 mr-86 font-semibold">Contact</h3>
          <div className="space-y-2 text-gray-700 text-sm mt-2">
            <p className="flex items-center gap-2">
              <FaEnvelope /> <a href="mailto:contact@tagmanya.com" className="underline">contact@tagmanya.com</a>
            </p>
            <p className="flex items-center gap-2"><FaPhone /> +216 26 100 101</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> 
              20 Mars St. 20 Mars Building. 4070 Msaken. Tunisia
            </p>
          </div>
        </div>

        {/* Members */}
        <div className="mt-6">
          <h3 className="text-blue-500 mr-86 font-semibold">Membres</h3>
          <div className="flex gap-6 mt-3">
            <div className="text-center">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt="Marie Leroy"
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <p className="text-sm font-medium mt-1">Marie Leroy <span className="text-blue-500">✔</span></p>
              <p className="text-xs text-gray-500">Directrice Marketing</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.pravatar.cc/80?img=2"
                alt="Marie More"
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <p className="text-sm font-medium mt-1">Marie More <span className="text-blue-500">✔</span></p>
              <p className="text-xs text-gray-500">Directrice Marketing</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="rechercher par nom, rôle"
            className="w-full px-3 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
