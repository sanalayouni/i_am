import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function BusinessCard() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white rounded-3xl shadow-lg p-6 w-[540px] relative">
        
        {/* Profile Picture */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img
            src="https://i.pravatar.cc/100" 
            alt="profile"
            className="w-30 h-30 rounded-full border-3 border-white shadow-md"
          />
        </div>

        {/* Header */}
        <div className="text-center mt-14">
          <h2 className="text-xl font-bold flex items-center justify-center mt-3 gap-5">
            Marie Leroy 
            <span className="text-blue-500">✔</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3">Directrice Marketing</p>
          <a href="#" className="text-blue-500 text-sm font-medium mt-3">Tagmanya</a>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-7 mt-7">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">Appeler</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">E-mail</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">Enregistrer</button>
        </div>

        {/* Contact Info */}
        <div className="mt-15 space-y-5 ml-7 text-gray-700">
          <p className="flex items-center gap-4"><FaPhone className="w-5 h-5 text-blue-500  " /> 94541894</p>
          <p className="flex items-center gap-4"><FaEnvelope className="w-5 h-5 text-blue-500" /> <a href="mailto:Marie.Loroy@exemple.com" className="underline">Marie.Loroy@exemple.com</a></p>
          <p className="flex items-center gap-4"> <FaMapMarkerAlt className="w-5 h-5 text-blue-500" />France, Nice</p>
        </div>

        {/* QR Code */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-6 text-2xl text-blue-600 ml-5">
            <FaFacebook className="w-10 h-10"/>
            <FaWhatsapp className="text-green-500 w-10 h-10" />
            <FaLinkedin className="w-10 h-10"/>
          </div>
          <div className="text-center ">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Marie%20Leroy"
              alt="QR Code"
              className="w-30 h-30 mr-16"
            />
            <p className="text-xs mt-7 mr-16 text-gray-500">Scanner pour enregistrer<br/>ce contact</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BusinessCard;
