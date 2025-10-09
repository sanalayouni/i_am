import Intro from '../components/intro';
import SearchBar from '../components/searchBar';
import logo from '../assets/i_am_logo.png';
import '../components/logo.css';
import user from '../assets/user.png';
import Carte from '../components/mini_carte';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // ✅ Move this outside the return

  return (
    <div className="min-h-screen text-white relative">
      {/* Logo outside content */}
      <div className="absolute top-2 -left-20 z-10">
        <img src={logo} alt="Logo" className="h-40 w-40 object-contain" />
      </div>

      {/* Main content wrapper */}
      <div className="max-w-screen-xl mx-auto px-10 pt-5">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-10">
          {/* Buttons */}
          <div className="flex gap-4 ml-auto">
            <Button
              label="Inscription"
              variant="secondary"
              onClick={() => navigate('/signup')}
            />
            <Button
              label="Connexion"
              variant="primary"
              onClick={() => navigate('/login')}
            />
          </div>
        </div>

        {/* Intro Section */}
        <Intro />

        {/* Search Bar */}
        <SearchBar />

        {/* Favorites Section */}
        <h2 className="font-semibold text-white mb-7 text-left text-3xl">
          Vos favoris
        </h2>
        <div className="flex flex-wrap gap-6">
          <Carte
            image={user}
            name="Marie Leroy"
            role="Directrice Marketing"
            isFavorite={true}
            entreprise="Tagmanya"
            entrepriseUrl="https://tagmanya.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;