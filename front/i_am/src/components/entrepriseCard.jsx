import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // to get ID from URL
import { getEntrepriseById } from "../services/api"; // <-- your API file
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import verif from "../assets/verified.png";

function CompanyCard() {
  const { id } = useParams(); // URL param (ex: /entreprise/66f3b9c2a3d7...)
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        setLoading(true);
        const data = await getEntrepriseById(id);
        setCompany(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCompany();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Chargement des données...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Erreur : {error}
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Aucune entreprise trouvée.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-[600px] relative">

        {/* Logo placeholder */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl shadow-md">
            {company.nom?.[0] || "?"}
          </div>
        </div>

        {/* Company Header */}
        <div className="text-center mt-14">
          <h2 className="text-3xl mb-4 font-bold flex items-center justify-center gap-2">
            {company.nom}
            {company.verified && <img src={verif} alt="Verified" className="w-8 h-8" />}
          </h2>
          {company.intro && <p className="text-gray-600 text-sm">{company.intro}</p>}
        </div>

        {/* About */}
        {company.description && (
          <div className="mt-6">
            <h3 className="text-blue-500 text-2xl font-semibold">À propos</h3>
            <p className="text-gray-600 text-sm mt-1">{company.description}</p>
          </div>
        )}

        {/* Legal Info */}
        <div className="mt-6">
          <h3 className="text-blue-500 text-2xl font-semibold">Informations légales</h3>
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-700 mt-4">
            <div className="space-y-2">
              <div className="flex">
                <span className="w-28 font-semibold">RNE</span>
                <span>{company.rne || "—"}</span>
              </div>
              <div className="flex">
                <span className="w-28 font-semibold">Num TVA</span>
                <span>{company.vatNumber || "—"}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex">
                <span className="w-28 font-semibold">Directeur</span>
                <span>{company.director || "—"}</span>
              </div>
              <div className="flex items-center">
                <span className="w-28 font-semibold">RIB</span>
                <FaDownload className="text-blue-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6">
          <h3 className="text-blue-500 text-2xl font-semibold">Contact</h3>
          <div className="space-y-2 text-gray-700 text-sm mt-2">
            {company.email && (
              <p className="flex items-center gap-2">
                <FaEnvelope />{" "}
                <a href={`mailto:${company.email}`} className="underline">
                  {company.email}
                </a>
              </p>
            )}
            {company.phone && (
              <p className="flex items-center gap-2">
                <FaPhone /> {company.phone}
              </p>
            )}
            {company.address && (
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> {company.address}
              </p>
            )}
          </div>
        </div>

        {/* Members */}
        {company.members && company.members.length > 0 && (
          <div className="mt-6">
            <h3 className="text-blue-500 text-2xl font-semibold">Membres</h3>
            <div className="mt-3 flex gap-6 flex-wrap">
              {company.members.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.photo || "https://i.pravatar.cc/80"}
                    alt={member.name}
                    className="w-16 h-16 rounded-full border-2"
                  />
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <p className="text-sm font-medium">{member.name}</p>
                    {member.verified && (
                      <img src={verif} alt="Verified" className="w-4 h-4" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyCard;
